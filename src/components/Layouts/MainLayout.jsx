import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { ToastContainer } from 'react-toastify'

export const MainLayout = () => {
  return (
    <div>
        <Header/>
        <ToastContainer/>
        <div className="pt-20">
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
