import React from 'react'
import './Login.css'

const Login = () => (
  <div className="main-container">
    <form>
      <div className="form-container">
        <h2>Login</h2>
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
            <button type="submit">Login</button>
          </li>
        </ul>
      </div>
    </form>
  </div>
)

export default Login
