import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAuthDispatch, logout, useAuthState } from '../../context/index'

function Navbar({ history }: { history: string[] }) {
  const { userDetails, token } = useAuthState()
  const isLoggedIn = userDetails && token
  const dispatch = useAuthDispatch()

  const handleLogout = async () => {
    await logout(dispatch)
    history.push('/login')
  }

  return (
    <nav className={styles.nav}>
      {isLoggedIn && (
        <div className={styles.menuToggle}>
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul className={`${styles.menu} ${styles.ul}`}>
            <Link to="/todos">
              <li>My to-dos</li>
            </Link>
            <Link to="/newtodo">
              <li>New to-do</li>
            </Link>
          </ul>
        </div>
      )}
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
        {isLoggedIn && (
          <>
            <li>
              <Link className={styles.a} to="/" onClick={handleLogout}>
                Log out
              </Link>
            </li>
            <li>
              Welcome,
              {userDetails?.user?.email}
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
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
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
