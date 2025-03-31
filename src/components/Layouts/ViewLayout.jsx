import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const ViewLayout = () => {
  return (
    <div>
    <Header/>
    <div className="pt-20">
      <Outlet/>
    </div>
</div>
  )
}

export default ViewLayout
