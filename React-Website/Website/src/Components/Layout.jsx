import React from 'react'
import Header from './Headers/Header'
import Footer from './Footers/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
