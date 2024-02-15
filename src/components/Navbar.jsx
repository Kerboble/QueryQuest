import React from 'react'
import { Link } from "react-router-dom"
import  Search  from './Search'
export default function Navbar({darkTheme, setDarkTheme}) {
  
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to="/">
            <p className="text-xl font-bold bg-blue-500 font-bold text-white px-2 py-1 rounded dark:bg-gray-500 dark:text-gray-900">
              Search 🔍
            </p>
          </Link>
          <button className="bg-white text-gray-500 border-solid border-2 border-sky-500 rounded px-2 py-1 font-bold dark:bg-gray-900 dark:text-white mb-2 hover:shadow-lg dark:border-sky-900 " type='button' onClick={() => {setDarkTheme(!darkTheme)}}>
            {darkTheme ? "Light mode ☀️" : "Dark mode 🌙"}</button>
        </div>
        <Search />
    </div>
  )
}
