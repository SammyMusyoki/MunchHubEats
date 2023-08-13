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
    const [authenticaated, setAuthenticaated] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    
    useEffect(() => {
        checkUserStatus()
    }, [])
    const checkUserStatus = async (userInfo) => {
        try {
            const response = await fetch("/login", {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify(
                userInfo
                )
            });
            const userDetails = response.json()
            setUser(userDetails)
            setAuthenticaated(true)
        } catch (error) {
            
        }
        setIsLoading(false)
    }
    
    // CRUD operations for managing users.
    useEffect(() => {
        getAllUsers()
    }, [])
const getAllUsers = async () => {
    try {
        const response = await fetch(`${baseURL}/users`);
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

    try{
        const response = await fetch("/login", {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify(
                userInfo   
                )
            });

            if (response.status === 200 || response.status === 201) {
                const userDetails = await response.json();
                localStorage.setItem(userDetails, JSON.stringify(userDetails));
                setUser(userDetails);
                setAuthenticaated(true)
                setSuccessMessage('User logged in Successfully')
                setIsLoading(false)
            } else {
                console.log('Login failed')
                const errorData = await response.json();
                setErrorMessage('Login Failed:' + errorData.message)
            }

        } catch (err) {
            console.log("Error loggin User In", err)
            setErrorMessage('Error logging User In: ' + err)
        }

        setTimeout(() => {
            setErrorMessage('')
            setSuccessMessage('')
        }, 5000)
};
    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
        setAuthenticaated(false)
    }
    
const registerUser = async (userInfo, navigate) => {
    setIsLoading(true);
    try {
        const response = await fetch("/register", {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify(
                userInfo   
                )
            });
             if (response.status === 201 || response.status === 200) {
                const { token, user } = await response.json();
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                navigate('login')
                console.log('User registered successfully');
             }
    } catch (error) {
        console.log(error, "Error Registering a User")
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
        const response = await fetch(`${baseURL}/owners`);
        const data = await response.json();
        setOwners(data);
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
        const response = await fetch(`${baseURL}/restaurants`);
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
        authenticaated,
        setAuthenticaated,
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
        setIsLoading,
        errorMessage,
        successMessage
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