import { rest } from 'msw'
import { toDos } from '../models/toDos'

const localToDos = [...toDos]

const ROOT_URL = 'http://localhost:3001'

export const toDosHandlers = [
  rest.get(`${ROOT_URL}/todos/:id`, (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          message: 'Please, log in',
        }),
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        ...localToDos.map((todo) => todo?.user_id === userId),
      }),
    )
  }),
  rest.post(`${ROOT_URL}/todos`, (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    const userId = sessionStorage.setItem('userId', validUser.id)
    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          message: 'Please, log in',
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
        user_id,
      },
    }

    localToDos.push(newToDo)

    return res(
      ctx.status(200),
      ctx.json({
        ...localToDos.map((todo) => todo?.user_id === userId),
      }),
    )
  }),
]
