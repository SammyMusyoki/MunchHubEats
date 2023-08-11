import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../utils/UserAuthContext'

const AddRestaurant = () => {
    const { addRestaurant} = useUserAuth()
    const [resName, setResName] = useState('')
    const [resImage, setResImage] = useState('')
    const [resContact, setResContact] = useState('')
    const [resOpenHours, setResOpenHours] = useState('')
    const [resCloseHours, setResCloseHours] = useState('')
    const [resPayMeth, setResPayMeth] = useState('')

    const navigate = useNavigate()

    const restaurantInfo = {
        resCloseHours,
        resContact,
        resImage,
        resName,
        resPayMeth,
        resOpenHours

    }

    const handleCreateRestaurant = (e) => {
        e.preventDefault()
        addRestaurant(restaurantInfo)
    }

  return (
    <React.Fragment>
        <div className='max-w-3xl mx-auto'>
            <h2>Create New Restaurant</h2>
            <form action="" className='flex flex-col space-y-4'>
                <div className='flex flex-col'>
                    <label htmlFor="Restaurant Name">Restaurant Name</label>
                    <input 
                    onChange={(e) => setResName(e.target.value)}
                    type="text" name="restaurant_name" id="restaurant_name" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="image">Add Image</label>
                    <input 
                    onChange={(e) => setResImage(e.target.value)}
                    type="file" name="image" id="image" className='border'/>  
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Restaurant Contact</label>
                    <input 
                    onChange={(e) => setResContact(e.target.value)}                   
                    type="text" name="contact" id="contact" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="opening_time">Opening Time</label>
                    <input 
                    onChange={(e) => setResOpenHours(e.target.value)}
                    type="time" name="opening_time" id="opening_time" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="opening_time">Closing Time</label>
                    <input 
                    onChange={(e) => setResCloseHours(e.target.value)}
                    type="time" name="closing_time" id="closing_time" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="payment_method">Payment Method</label>
                    <input 
                    onChange={(e) => setResPayMeth(e.target.value)}
                    type="text" name="payment_method" id="payment_method" />
                </div>
                <button onClick={handleCreateRestaurant} className='border-2 bg-yellow-400 p-1 rounded-md'>
                    Create Restaurant
                </button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default AddRestaurant