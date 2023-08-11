import React from 'react'
import CartItem from './cartItem';
import { useCart } from '../../utils/CartContext';



const Cart = () => {
  const { cartState, cartDispatch } = useCart()
  const { cartItems } = cartState

  console.log(cartState)

  const incrementQuantity = item => {
    cartDispatch ({
      type: "INCREMENT_QUANTITY",
      payload: item
    })
  }
  const removeFromCart = item => {
    cartDispatch ({
      type: "REMOVE_FROM_CART",
      payload: item
    })
  }
  const decrementQuantity = item => {
    cartDispatch ({
      type: "DECREMENT_QUANTITY",
      payload: item
    })
  }

  const totalCartPrice = cartItems.reduce(
    ( total, item ) => total + item.prices * item.quantity,
    0
  )

  const handleCheckout = () => {
    window.location.href = 'checkout'
  }

  const handleContinueShopping = () => {
    window.location.href = 'our-menu'
  }
  return (
    <React.Fragment>
        <section className='w-full relative isolate h-full'>
            <div className='mx-auto max-w-[1560px] px-6 py-6'>
              <div className='overflow-y-scroll scrollbar-hide h-screen'>
                <div className='flex justify-between items-center py-4'>
                    <h1 className='text-3xl font-bold text-gray-900'>Cart</h1>
                    <p className='text-2xl font-bold'>Total Price: Ksh <span className='text-gray-500'>{totalCartPrice }</span></p>
                </div>

                  <div className='flex justify-between items-center py-4 bottom-0'>
                    <button onClick={handleContinueShopping} className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded'>
                      Continue Shopping
                    </button>

                    <button onClick={handleCheckout} className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded'>
                      Checkout
                    </button>
                  </div>
                <div className='space-y-3'>
                  {
                    cartItems.map((item) => (
                      <CartItem key={item.menu_id} item={item} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
                    ))
                  }
                </div>
              </div>



            </div>
        </section>
    </React.Fragment>
  )
}

export default Cart;