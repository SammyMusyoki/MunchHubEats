import React from 'react'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../../utils/UserAuthContext'

const Registration = () => {
  const { authenticated, setAuthenticated, isAdmin, logoutUser, loginUser, setUser } = useUserAuth()

  return (
    <React.Fragment>
      <div className="w-64 flex flex-col items-start justify-start bg-gray-900 p-4">
        <div className=" ">
          {authenticated ? (
            <div className='flex flex-col gap-3 w-full items-start justify-start'>
              {
                isAdmin && (
                <Link
                  to="sign"
                  className="flex items-center justify-center  rounded-md text-gray-50 py-1"
                >
                  Admin Panel
                </Link>
                )
              }
              <button
              onClick={logoutUser}
                to="login"
                className=" rounded-md py-1 text-white items-center justify-center"
              >
                Logout
              </button>
              <Link className="text-white" to="/">
                Profile
              </Link>
              <Link className="text-white" to="addyourrestaurant">
                Favourites
              </Link>
            </div>
          ) : (
            <div className='flex flex-col gap-3'>
              <Link
                to="sign"
                className="flex items-center justify-center border rounded-md text-gray-50 py-1"
              >
                Sign Up
              </Link>
              <Link
              to="/login"
                className="flex border rounded-md py-1 text-black bg-white items-center justify-center"
              >
                Log in
              </Link>
              <Link className="text-white" to="/">
                Create a business account
              </Link>
              <Link className="text-white" to="addyourrestaurant">
                Add your restaurant
              </Link>
              <Link className="text-white" to="/">
                Sign up to deliver
              </Link>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Registration