import React from 'react'
import MenuCard from "./Features/MenuCard.jsx"
import { useCart } from '../../utils/CartContext.js'

const Menu = ( { menu, numberOfItemsToShow }) => {
    const { cartDispatch } = useCart();

    const addToCart = (product) => {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    };
  
  const startIndex = Math.max(0, menu.length - numberOfItemsToShow)

  const lastItems = menu.slice(startIndex)

  const menuData = lastItems.map((data) => (
        <MenuCard data={data} key={data.menu_id} addToCart={addToCart}/>
  ))

  return (
    <React.Fragment>
        <section className=' w-full relative isolate '>
            <div className='mx-auto max-w-[1560px] py-16 px-6'>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <h1 className='font-dancing text-3xl text-yellow-400 capitalize'>yammy & delicious</h1>
                    <h2 className='font-semibold text-6xl capitalize'>our Menu</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
                    
                   {menuData}
                </div>
            </div>
       </section>
    </React.Fragment>
  )
}

export default Menu