import React from 'react'
import photo from '../../../images/background2.jpg'
 

const Card = ({dat}) => {
  return (
    <React.Fragment>    
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
            <img class="rounded-t-lg object-cover h-80 w-96" src={dat.image} alt={dat.name} />
            </a>
            
            <div class="p-5">
                <a href="/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dat.restaurant_name}</h5>
                </a>
                <p class="mb-3 text-gray-700 dark:text-gray-400 font-semibold"><span className='text-xl text-black'>Contact: </span>{dat.contact_number}</p>
                <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                    Order Now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> 
            </div>
        </div>
   </React.Fragment>
  )
}

export default Card