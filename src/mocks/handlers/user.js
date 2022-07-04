import { rest } from 'msw'
import { validUser } from '../models/user'

const users = [validUser]

const ROOT_URL = 'http://localhost:3001'

export const userHandlers = [
  rest.post(`${ROOT_URL}/login`, (req, res, ctx) => {
    if (
      req.body?.username === validUser.username &&
      req.body?.password === validUser.password
    ) {
      sessionStorage.setItem('is-authenticated', 'true')
      sessionStorage.setItem('userId', validUser.id)

      return res(
        ctx.status(200),
        ctx.json({
          user: validUser,
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
        id: users.length,
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
