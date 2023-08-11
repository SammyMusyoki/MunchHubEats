import React from 'react'
import { useUserAuth } from '../../utils/UserAuthContext'
import { Link } from 'react-router-dom';

const RestaurantsList = () => {
    const { restaurants } = useUserAuth();

    const handleNavigateCreateRestaurant = () => {
        window.location.href = 'create-restaurant'
    }
  return (
        <React.Fragment>
            <section className='mx-auto max-w-6xl'>
                <div>
                    <div className='flex items-center justify-between mb-6'>
                        <h1 className='font-bold'>Restaurants list</h1>
                        <button onClick={handleNavigateCreateRestaurant} className='py-2 text-gray-100 px-2 text-sm bg-yellow-400 rounded-md'>Create Restaurant</button>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-100 uppercase bg-gray-950 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Restaurant name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Contact
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Opening Hours
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Closing Hours
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Payments Methods
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Edit Restaurant
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    restaurants.map(restaurant => (        
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {restaurant.restaurant_name}
                                            </th>
                                            <td class="px-6 py-4">
                                                <div className='w-16 h-16'>
                                                <img src={restaurant.image} alt="" className='rounded-full w-full h-full object-cover'/>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4">
                                                {restaurant.contact_number}
                                            </td>
                                            <td class="px-6 py-4">
                                                {restaurant.opening_hours}
                                            </td>
                                            <td class="px-6 py-4">
                                                {restaurant.closing_hours}
                                            </td>
                                            <td class="px-6 py-4">
                                                {restaurant.payment_method}
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    ))
                                }            
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </React.Fragment>
  )
}

export default RestaurantsList