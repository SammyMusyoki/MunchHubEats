// import axios from 'axios';
import React, {createContext, useContext, useEffect, useState } from 'react'

const UserAuthContext = createContext();

const baseURL = "http://127.0.0.1:5000"

const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [owners, setOwners] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)


    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])
    
    // CRUD operations for managing users.
    useEffect(() => {
        getAllUsers()
    }, [])
const getAllUsers = async () => {
    try {
        const response = await fetch(`${baseURL}/users`, {
          mode: 'no-cors'
        });
        const data = await response.json();
        setUsers(data);
        console.log(data)
    } catch (err) {
        console.log(err);
    }
};

            // console.log(userInfo);
//         try{
//             const response = await axios.post(`${baseURL}/login`, {
//                 headers: {
//                     "X-Requested-With" : "XMLHttpRequest"
//                 },
//                 proxy: {
//                     host: '127.0.0.1',
//                     port: 3000,
//                     protocol: 'http',
//                     auth: {
//                         userInfo
//                     }
//                 }
//             })
//             if (response.status === 200) {
//                 console.log(response.status)
//             const { token, user, redirect_url } = response.data
//             console.log(response.data)
//             localStorage.setItem('token', token)
//             localStorage.setItem('user', JSON.stringify(user))
//             setUser(user)
//             setAuthenticated(true)


 const loginUser = async (userInfo) => {
    setIsLoading(true);

    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        if (response.status === 200) {
            const { token, user, redirect_url } = await response.json();
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            setAuthenticated(true);

            if (redirect_url) {
                window.location.href = redirect_url;
            }
        } else {
            console.log('Login failed');
        }

        setAuthenticated(true)
        setIsLoading(false)

    } catch (err) {
        console.log(err);

    }

    setIsLoading(false);
};


    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
        setAuthenticated(false)
    }
    
const registerUser = async (userInfo) => {
    setIsLoading(true);

    try {
        const response = await fetch(`${baseURL}/register`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });
        console.log(userInfo)

        if (response.status === 201) {
            const { token, user} = await response.json();
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log('User registered successfully');
        }
    } catch (error) {
        console.log(error, 'Registration failed');
    }

    setIsLoading(false);
};

    // CRUD operations for managing Owners
    useEffect(() => {
        getAllOwners()
    }, [])

const getAllOwners = async () => {
    setIsLoading(true);

    try {
        const response = await fetch(`${baseURL}/owners`, {
            mode: 'no-cors'
        });
        const response_data = await response.json();
        setOwners(response_data);
        console.log('All Owners Fetched Successfully');
    } catch (err) {
        console.log("Error fetching Owners", err);
    }

    setIsLoading(false);
};


    // CRUD operations for managing restaurants.
const addRestaurant = async (restaurantInfo) => {
    try {
        const response = await fetch(`${baseURL}/create-restaurant`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurantInfo),
        });

        console.log('Restaurant Added Successfully', response);

        if (response.status === 201) {
            window.location.href = 'restaurants-list';
        }
    } catch (err) {
        console.log("Failed to create Restaurant", err);
    }
};


    useEffect(() => {
        getAllRestaurants()
    }, [])

const getAllRestaurants = async () => {
    setIsLoading(true);

    try {
        const response = await fetch(`${baseURL}/restaurants`, {
          mode: 'no-cors'
        });
        const data = await response.json();
        setRestaurants(data);
    } catch (err) {
        console.log("Error fetching restaurants", err);
    }

    setIsLoading(false);
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
        users,
        setUser,
        authenticated,
        setAuthenticated,
        restaurants,
        owners,
        getAllRestaurants,
        getAllOwners,
        addRestaurant,
        updateRestaurant,
        deleteRestaurant,
        isAdmin,
        setIsAdmin,
        loginUser,
        registerUser,
        logoutUser,
        setIsLoading
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