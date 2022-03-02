import React from 'react'
import styles from './Login.module.css'

const Login = () => (
  <div className={styles.mainContainer}>
    <form className={styles.form}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <p>Please, fill the required information</p>
        <hr />
        <ul className={styles.inputsContainer}>
          <li>
            <label htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="text"
              name="email"
              id="email"
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
            />
          </li>
          <li>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </li>
        </ul>
      </div>
    </form>
  </div>
)

export default Login
