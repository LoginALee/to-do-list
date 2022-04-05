/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import styles from './Login.module.css'
import { loginUser, useAuthState, useAuthDispatch } from '../context'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthDispatch()
  const { loading, errorMessage } = useAuthState()

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = { email, password }
    try {
      const response = await loginUser(dispatch, payload)
      if (!response.user) return
      props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <h2>Login</h2>
          {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </label>
            </li>
            <li>
              <button
                disabled={loading}
                onClick={() => handleLogin}
                type="submit"
                className={styles.button}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default Login
