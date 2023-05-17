import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <ul className='navBar-list'>
            <li className='li'><a href='/login'>Login / Signup </a></li>
            <li className='li'><a href="contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar