import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <Link to="/todos">
          <li>My to-dos</li>
        </Link>
        <Link to="/newtodo">
          <li>New to-do</li>
        </Link>
      </ul>
    </div>
    <ul className="navbar-links">
      <li>
        <Link className="logo" to="/">
          <img src="/logo1.png" alt="logo" width="50px" />
        </Link>
      </li>
      <li>
        <Link className="active navbar-item" to="/whyus">
          Why us?
        </Link>
      </li>
      <li>
        <Link to="/signup" className="navbar-item">
          Sign up
        </Link>
      </li>
      <li>
        <Link to="/login" className="navbar-item">
          Sign in
        </Link>
      </li>
    </ul>
  </nav>
)
