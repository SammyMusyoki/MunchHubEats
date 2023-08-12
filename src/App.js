import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/BaseLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./Components/LogIn/Login";
import Sign from "./Components/Sign/Sign";
import AddRestaurant from "./Components/AddRestaurant/AddRestaurant";
import Cart from "./Components/Cart/Cart";
import OurMenu from "./Components/OurMenu/OurMenu";
import Checkout from "./pages/Checkout";
import { UserAuthProvider } from "./utils/UserAuthContext";
import { CartProvider } from "./utils/CartContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminDashboard from "./Components/Admin/Admin-dashboard";
import RestaurantsList from "./Components/Admin/RestaurantsList";
import OwnersList from "./Components/Admin/OwnersList";
import UsersList from "./Components/Admin/UsersList";
import Profile from "./Components/Profile/Profile";





function App() {
 
  const router = createBrowserRouter( 
   createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route index element= {<Home />}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/home/*" element={<PrivateRoutes/>}>
        <Route path="our-menu" element = {<OurMenu/>}/>
        <Route path="cart" element = {<Cart/>}/>
        <Route path="checkout" element = {<Checkout/>}/>
        <Route path="admin-panel" element = {<AdminDashboard/>}>
            <Route path="create-restaurant" element ={<AddRestaurant/>}/>
            <Route path="restaurants-list" index element= {<RestaurantsList/>}/>
            <Route path="owners-list" element= {<OwnersList/>}/>
            <Route path="users-list" element= {<UsersList/>}/>
        </Route>
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
