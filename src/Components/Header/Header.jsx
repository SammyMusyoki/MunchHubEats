import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import { FaSearch, FaShoppingCart, } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniBars3BottomLeft} from "react-icons/hi2";


import Registration from '../Registration/Registration';
import { useCart } from '../../utils/CartContext';



const Header = () => {

  const { cartState } = useCart();
  const { cartItems } = cartState

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  )


  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="px-6  bg-opacity-70 py-8 bg-gray-50 text-gray-950">
        <div className="flex items-center justify-between mx-auto max-w-[1560px]">
          <div className="flex lg:hidden ">
            <HiMiniBars3BottomLeft className="h-6 w-6" />
          </div>
          <div className="flex">
            <Link to='./' className="font-bold text-2xl lg:text-3xl">MunchHub</Link>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <span>
              <Link to='search'>
                <FaSearch className=" h-6 w-6" />
              </Link>
            </span>

            <div className="flex items-center justify-center">
              <span className="flex text-sm items-center justify-center h-5 w-5 relative bottom-2 left-9 bg-yellow-400 rounded-full text-gray-50 flex-shrink-0">
                {cartItemCount}
              </span>
              <Link to="home/Cart">
                <span>
                  <FaShoppingCart className=" h-6 w-6" />
                </span>
              </Link>
            </div>

            <div>
              <button onClick={handleOpen}>
                <CgProfile className=" h-6 w-6" />
              </button>
              <span
                className={`${
                  isOpen ? "flex" : "hidden"
                } absolute z-50 right-3 top-24`}
              >
                <Registration />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header