import React from 'react'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <div className={styles.mainContainer}>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <h2>Sign up</h2>
          <p>Please, fill the required information</p>
          <hr />
          <ul className={styles.inputsContainer}>
            <li>
              <label htmlFor="email">
                Email
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  id="email"
                />
              </label>
            </li>
            <li>
              <label htmlFor="password">
                Password
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  id="password"
                />
              </label>
            </li>
            <li>
              <label htmlFor="confirm-password">
                Confirm password
                <input
                  className={styles.input}
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                />
              </label>
            </li>
            <li>
              <button type="submit" className={styles.button}>
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default SignUp
