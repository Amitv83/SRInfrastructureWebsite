import React from 'react'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout;