import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
    <a className="logo" href="#logo">
      <img src="./public/logo1.png" alt="" />
    </a>
      <ul className="navbar-links">
        <li>
          <a className="active navbar-item" href="#whyUs">Why us?</a>
          <a href="#signIn" className="navbar-item">Sign in</a>
          <a href="#signUp" className="navbar-item">Sign up</a>
        </li>
      </ul>
    </nav>
  )
}
