import React, {useState, useEffect  } from 'react'
// import Header from '../Components/Header/Header';
import BodyHeader from '../Components/Header/BodyHeader';
import OurRestaurant from '../Components/OurRestaurant/OurRestaurant';
import Menu from '../Components/Menu/Menu';
// import UniqueDining from '../Components/UniqueDining/UniqueDining';
import Discount from '../Components/Discount/Discount';
import Display from '../Components/Display/Display';
import DeliveryApp from '../Components/DeliveryApp/DeliveryApp';



const Home = () => {
  const [data, setData] = useState([])
   useEffect(() => {
    fetch('http://localhost:5000/restaurants')
    .then((r) => r.json())
    .then((data) => setData(data))
    
  },[])


  const [menu, setMenu] = useState([])
     useEffect(() => {
    fetch('http://localhost:5000/menus')
    .then((r) => r.json())
    .then((menu) => setMenu(menu))
    
  },[])


  return (
    <React.Fragment>
      <header className='bg-hero bg-center bg-cover bg-no-repeat h-screen w-full relative isolate  bg-black'>
        {/* <Header/> */}
        <BodyHeader/>
      </header>
      <OurRestaurant data = {data}/>
      <Menu menu = {menu} numberOfItemsToShow={8}/>
      {/* <UniqueDining/> */}
      <Discount/>
      <Display/>
      <DeliveryApp/>
    </React.Fragment>
  )
}

export default Home