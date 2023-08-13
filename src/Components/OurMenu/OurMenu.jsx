import React, { useEffect, useState } from 'react'
import MenuCard from '../Menu/Features/MenuCard'
import { useCart } from '../../utils/CartContext'
import { useUserAuth } from '../../utils/UserAuthContext'

const baseURL = "http://127.0.0.1:5000"

const OurMenu = () => {

    const [menu, setMenu] = useState([]);
    // const { setIsLoading } = useUserAuth()

    useEffect(() => {
      getAllMenus()
    }, [])
    const getAllMenus = async () => {
        // setIsLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:5000/menus");
            const data = await response.json();
            setMenu(data);
            console.log('All Menus Fetched Successfully');
        } catch (err) {
            console.log("Error fetching Owners", err);
        }

        // setIsLoading(false);
    };

  const { cartDispatch } = useCart()

  const addToCart = product => {
    cartDispatch(
      {
        type: 'ADD_TO_CART',
        payload: product
      }
    )
  }

      const menuCard = menu.map((data) => (
        <MenuCard data={data} key={data.menu_id} addToCart={addToCart}/>
  ))
  return (
    <React.Fragment>
        <section className='w-full relative isolate'>
            <div className='mx-auto max-w-[1560px] px-6 py-6'>
                <h1 className='font-bold text-3xl'>Our Menu</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4'>   
                    {menuCard}
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default OurMenu