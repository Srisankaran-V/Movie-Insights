import React from 'react'
import logo from '../assets/logo.png'

import {Link} from 'react-router-dom'
const NavBar = () => {
  return (

    <div className='flex border space-x-8 items-center'>
        <img src={logo} alt="logo" className='w-[50px]'/>
        <Link to='/' className='text-blue-700 text-2xl font-bold'>Home</Link>
        <Link to='/watchlist' className='text-blue-700 text-2xl font-bold'>Watchlist</Link>
    
    </div>
    
  )
}

export default NavBar