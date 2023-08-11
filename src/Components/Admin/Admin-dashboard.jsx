import React from 'react'
import AdminSidebar from './AdminSidebar'
import RestaurantsList from './RestaurantsList'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <section className='flex'>
        <AdminSidebar/>
        <div className='h-screen scroll-smooth w-full mx-auto max-w-7xl'>
          <Outlet/>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AdminDashboard