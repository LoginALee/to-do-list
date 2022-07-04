import { rest } from 'msw'
import { validUser } from './user'
import { toDos } from './toDos'

const users = [validUser]
const localToDos = [...toDos]

const ROOT_URL = process.env.REACT_API_URL ?? 'http://localhost:3001'


export const handlers = [
  rest.post(`${ROOT_URL}/login`, (req, res, ctx) => {
    if (req.body?.username === validUser.username && req.body?.password === validUser.password){
      sessionStorage.setItem('is-authenticated', 'true')
      sessionStorage.setItem('userId', validUser.id)

    return res(
      ctx.status(200),
      ctx.json({
        user: validUser,
        token: Math.random().toString(36).slice(-5)
      })
    )
    } else{
      return res(
        ctx.status(200),
        ctx.json({
          "error": "Invalid user or password"
        })
      )
    }
  }),
  rest.post(`${ROOT_URL}/users`, (req, res, ctx) => {
    const { username, password, email } = req.body
    if (username && password && email){
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
          token: Math.random().toString(36).slice(-5)
        })
      )
    }else {
      return res(
        ctx.status(200),
        ctx.json({
          "error": "Invalid user or password"
        })
      ) 
    }
  }),
  rest.get(`${ROOT_URL}/todos/:id`, (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          "message": "Please, log in"
        }),
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        ...localToDos.map((todo) => todo?.user_id === userId)
      }),
    )
  }),
  rest.post(`${ROOT_URL}/todos`, (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    const userId =  sessionStorage.setItem('userId', validUser.id)
    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          "message": "Please, log in"
        }),
      )
    }

    const newToDo = {
      todo: {
        id: localToDos.length,
        title: req.body.todo.title,
        done: req.body.todo.done,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id
      }
    }

    localToDos.push(newToDo)

    return res(
      ctx.status(200),
      ctx.json({
        ...localToDos.map((todo) => todo?.user_id === userId)
      }),
    )
  })
]
