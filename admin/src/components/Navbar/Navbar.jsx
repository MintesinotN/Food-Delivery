import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt={assets.logo} className="logo" />
      <img src={assets.profile_image} alt={assets.profile_image} className="profile" />
    </div>
  )
}

export default Navbar
