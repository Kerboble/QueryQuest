import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
const [darkTheme, setDarkTheme] = useState(true)
    
  return (
    <div className={darkTheme ? "dark" : ""}>
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
            <Navbar 
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
    
}

export default Layout