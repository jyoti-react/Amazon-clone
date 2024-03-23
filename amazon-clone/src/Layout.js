import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout