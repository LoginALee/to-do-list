import React, { useState } from 'react'
import { signUp, useAuthDispatch, useAuthState } from '../context'
import styles from './SignUp.module.css'

function SignUp({ history }: { history: string[] }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthDispatch()
  const { loading, errorMessage } = useAuthState()

  const handleSignUp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const payload = { username, email, password }
    try {
      const response = signUp(dispatch, payload)
      if (response === undefined) return
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <h2>Sign up</h2>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="username">
                User name
                <input
                  className={styles.input}
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </li>
            <li>
              <button
                type="submit"
                className={styles.button}
                onClick={handleSignUp}
                disabled={loading}
              >
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
