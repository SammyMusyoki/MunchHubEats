import React from 'react'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../../utils/UserAuthContext'

const Registration = () => {
  const { user, isAdmin, logoutUser, authenticaated} = useUserAuth()
  // const authenticated = localStorage.getItem('token');

  return (
    <React.Fragment>
      <div className="w-64 flex flex-col items-start justify-start bg-gray-900 p-4">
        <div className=''>
          {
            user && authenticaated ? (
              <div className='flex flex-col gap-3 w-full items-start justify-start'>
                {
                isAdmin && (
                  <Link to='home/admin-panel' className='py-1 text-gray-50'>
                  Admin Panel
                  </Link>
                )
          }
          <button onClick={logoutUser} className='text-gray-50 py-1'>
            Log Out
          </button>
          <Link to='home/profile' className='text-gray-50'>
            Profile
          </Link>
          <Link to='home/favourites' className='text-gray-50'>
            Favourites
          </Link>
        </div>
      ) : (
        <div className='flex flex-col gap-3'>
          <Link className='text-gray-950 py-1 flex border rounded-md bg-gray-50 items-center justify-center' to='sign'>Register</Link>
          <Link className='text-gray-50 py-1 flex border rounded-md bg-black items-center justify-center' to='login'>Log In</Link>
          <Link className='text-gray-50 py-1' to='/'>Create A Business Account</Link>
          <Link className='text-gray-50 py-1' to='restaurant-owner'>Add Your Own Restaurant</Link>
          <Link className='text-gray-50 py-1' to='/driver'>Sign Up To Deliver</Link>
        </div>
      )}
    </div>
  </div>
    </React.Fragment>
  );
}

export default Registration