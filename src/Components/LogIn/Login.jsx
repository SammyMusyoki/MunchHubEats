import React, { useState } from 'react'
import { useUserAuth } from '../../utils/UserAuthContext'
import { Link } from 'react-router-dom'

const Login = () => {
    const { loginUser } =  useUserAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userInfo = {
        email,
        password
    }

    const handleLogin = (e) => {
        e.preventDefault(userInfo)
        loginUser()
    }

    const handleNavigateRegister = () => {
        window.location.href = 'sign'
    }

  return (
    <React.Fragment>
        <div className='w-96 mx-auto py-16'>
            <div className='text-center my-3'>
                <h1 className='text-2xl font-bold text-center'>MunchHub Login</h1>
                <p>Do not have an account? <button type='button' onClick={handleNavigateRegister} className='text-yellow-400'>Register</button></p>
            </div>
            <form className='border p-8'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input 
                    type="email" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@munchhub.com" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input 
                    type="password" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                    </div>
                    <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/" className="text-yellow-400 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button 
                type="submit" 
                onClick={handleLogin}
                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-400">Login</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Login