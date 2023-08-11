import axios from 'axios';
import React, {createContext, useContext, useEffect, useState } from 'react'

const UserAuthContext = createContext();

const baseURL = "http://127.0.0.1:5000"

const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [restaurants, setRestaurants] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])
    
    // CRUD operations for managing users.
    const loginUser = async (userInfo) => {
        setIsLoading(true)

            console.log(userInfo);
        try{
            const response = await axios.post(`${baseURL}/login`, {
                headers: {
                    "X-Requested-With" : "XMLHttpRequest"
                },
                proxy: {
                    host: '127.0.0.1',
                    port: 3000,
                    protocol: 'http',
                    auth: {
                        userInfo
                    }
                }
            })
            if (response.status === 200) {
                console.log(response.status)
            const { token, user, redirect_url } = response.data
            console.log(response.data)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setAuthenticated(true)

            if (redirect_url) {
                window.location.href = redirect_url
            }
            } else {
                console.log('Login failed')
            }
        } catch (err) {
            console.log(err)
        }
        setAuthenticated(true)
        setIsLoading(false)
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
        setAuthenticated(false)
    }
    
    const registerUser = async (userInfo) => {
        setIsLoading(true)

        try {
            const response = await axios.post(`${baseURL}/register`, userInfo)
            if (response.statusCode === 201) {
                const { token, user, redirect_url } = response.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                console.log('User registered successfully')

                if (redirect_url) {
                    window.location.href = redirect_url
                }
            }
        } catch (error) {
            console.log(error, 'Registration failed')
        }
        setIsLoading(false)
    }

    // CRUD operations for managing restaurants.
    const addRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant])
    };

    const updateRestaurant = (id, updatedRestaurant) => {
        const updatedRestaurants = restaurants.map(restaurant => restaurant.id === id?{ ...restaurant, ...updatedRestaurant }: restaurant);
        setRestaurants(updatedRestaurants)
    }

    const deleteRestaurant = (id) => {
        const updatedRestaurants = restaurants.filter(restaurant => restaurant.id!== id)
        setRestaurants(updatedRestaurants)
    };

    const contextData = {
        user,
        setUser,
        authenticated,
        setAuthenticated,
        restaurants,
        addRestaurant,
        updateRestaurant,
        deleteRestaurant,
        isAdmin,
        setIsAdmin,
        loginUser,
        registerUser,
        logoutUser,
    }

    return (
        <UserAuthContext.Provider value={contextData}>
            {
                loading ? <p className='flex items-center justify-center'>Loading...</p> :
            children
            }
        </UserAuthContext.Provider>
    )
};

const useUserAuth = () => {
    const context = useContext(UserAuthContext);
    if (context === undefined) {
        throw new Error('useUserAuth must be used within a UserAuthProvider');
    }
    return context
}

export {UserAuthProvider, useUserAuth}