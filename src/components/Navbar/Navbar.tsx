import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.menuToggle}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className={`${styles.menu} ${styles.ul}`}>
        <Link to="/todos">
          <li>My to-dos</li>
        </Link>
        <Link to="/newtodo">
          <li>New to-do</li>
        </Link>
      </ul>
    </div>
    <ul className={`${styles.navbarLinks} ${styles.ul}`}>
      <li>
        <Link className={styles.logo} to="/">
          <img src="/logo1.png" alt="logo" width="50px" />
        </Link>
      </li>
      <li>
        <Link className={styles.a} to="/whyus">
          Why us?
        </Link>
      </li>
      <li>
        <Link className={styles.a} to="/signup">
          Sign up
        </Link>
      </li>
      <li>
        <Link className={styles.a} to="/login">
          Sign in
        </Link>
      </li>
    </ul>
  </nav>
)
