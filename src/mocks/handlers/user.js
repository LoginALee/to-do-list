import { rest } from 'msw'
import { validUser } from '../models/user'

const users = [validUser]

const ROOT_URL = 'http://localhost:3001'

export const userHandlers = [
  rest.post(`${ROOT_URL}/login`, (req, res, ctx) => {
    const userToLogin = users.find(
      (user) =>
        user.password === req.body.password &&
        user.username === req.body.username,
    )
    if (userToLogin) {
      sessionStorage.setItem('is-authenticated', 'true')
      sessionStorage.setItem('userId', userToLogin.id)

      return res(
        ctx.status(200),
        ctx.json({
          user: userToLogin,
          token: Math.random().toString(36).slice(-5),
        }),
      )
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          error: 'Invalid user or password',
        }),
      )
    }
  }),
  rest.post(`${ROOT_URL}/users`, (req, res, ctx) => {
    const { username, password, email } = req.body
    if (username && password && email) {
      const newUser = {
        id: users.length + 1,
        username,
        password,
        email,
        password_digest: Math.random().toString(36).slice(-5),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      users.push(newUser)

      sessionStorage.setItem('is-authenticated', 'true')
      sessionStorage.setItem('userId', newUser.id)

      return res(
        ctx.status(200),
        ctx.json({
          user: newUser,
          token: Math.random().toString(36).slice(-5),
        }),
      )
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          error: 'Invalid user or password',
        }),
      )
    }
  }),
]
