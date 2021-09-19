import React from 'react'
import './SignUp.css'

const SignUp = () => (
  <div className="main-container">
    <form>
      <div className="form-container">
        <h2>Sign up</h2>
        <p>Please, fill the required information</p>
        <hr />
        <ul className="inputs-container">
          <li>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
          </li>
          <li>
            <button type="submit">Sign up</button>
          </li>
        </ul>
      </div>
    </form>
  </div>
)

export default SignUp
