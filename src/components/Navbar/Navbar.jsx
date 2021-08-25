import React from 'react'
import './Navbar.css'

export const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-links">
      <li>
        <a className="logo" href="#logo">
          <img src="/logo1.png" alt="logo" width="50px" />
        </a>
      </li>
      <li>
        <a className="active navbar-item" href="#whyUs">
          Why us?
        </a>
      </li>
      <li>
        <a href="#signUp" className="navbar-item">
          Sign up
        </a>
      </li>
      <li>
        <a href="#signIn" className="navbar-item">
          Sign in
        </a>
      </li>
    </ul>
  </nav>
)
