import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdRestaurant} from "react-icons/io"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"





const AdminSidebar = () => {
  return (
    <React.Fragment>
        <section className='bg-gray-200'>
            <div className='flex flex-col p-8 font-semibold space-y-4 '>
                <div className='flex gap-2 items-center'>
                    <span className='h-5 w-5'><IoMdRestaurant/></span>
                    <Link to='restaurants-list'>Restaurants</Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='h-5 w-5'><BsFillPersonFill/></span>
                    <Link to='owners-list'>Owners</Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <span className='h5 w-5'><AiOutlineUser/></span>
                    <Link to='users-list'>Users</Link>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default AdminSidebar