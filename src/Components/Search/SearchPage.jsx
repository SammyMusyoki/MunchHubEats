import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchPage = () => {
    const [menu, setMenu] = useState([])
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:5000/menus")

            if (response.ok) {
                const data = await response.json()
                const meals = data.results.slice(0, 8);
                setMenu(meals)
            } else {
                console.error('Failed to fetch data')
            }
        } catch (error) {
            
        }
    }
  return (
    <React.Fragment>
        <section className="w-full relative isolate h-full">
            <div className="mx-auto max-w-[1560px] px-6 py-6">
                <div className='w-full border'>
                    <form action="" className='flex '>
                        <input 
                        onChange={(e) => setMenu(e.target.value)}
                        type="search" name="" id="" placeholder='Search for meals here' className='w-full text-lg p-3 pl-6 rounded-l-full'/>
                        <button type="submit" onClick={handleSearch} className='w-24 flex items-center justify-center bg-yellow-400 rounded-r-full'><FaSearch className=" h-6 w-6" /></button>
                    </form>
                </div>
                <div className="overflow-y-scroll scrollbar-hide h-screen">
                    <div>
                        {
                            menu.map(meal => {
                                <div className='' key={meal.menu_id}>
                                    <img src={meal.image} alt="" className='w-24 h-24'/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default SearchPage