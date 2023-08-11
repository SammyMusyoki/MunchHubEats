import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/BaseLayout";
import Home from "./pages/Home";
import Login from "./Components/LogIn/Login";
import Sign from "./Components/Sign/Sign";
import AddRestaurant from "./Components/AddRestaurant/AddRestaurant";
import Cart from "./Components/Cart/Cart";
import OurMenu from "./Components/OurMenu/OurMenu";
import Checkout from "./pages/Checkout";
import { UserAuthProvider } from "./utils/UserAuthContext";
import { CartProvider } from "./utils/CartContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminPanel from "./Components/Admin/AdminPanel";





function App() {
 
  const router = createBrowserRouter( 
   createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
    <Route index element= {<Home />}/>
    <Route element={<PrivateRoutes/>}>
      <Route path="admin-panel" element = {<AdminPanel/>}/>
      <Route path="addyourrestaurant" element ={<AddRestaurant/>}/>
      <Route path="cart" element = {<Cart/>}/>
      <Route path="our-menu" element = {<OurMenu/>}/>
      <Route path="checkout" element = {<Checkout/>}/>
    </Route>
    <Route path="login" element = {<Login/>}/>
    <Route path="sign" element = {<Sign/>}/>
    </Route>
   ) 
  )
  return (
  <UserAuthProvider>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </UserAuthProvider>
  
  )
}

export default App;
