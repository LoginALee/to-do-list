export type Todo = {
  id: number
  title: string
  done: boolean
  created_at: string
  updated_at: string
  user_id: number
}

export type NewTodoData = {
  todo: {
    title: string
    done: boolean
  }
}

export type GetAllToDosResponse = {
  data: Todo[] | []
}

export type CreateToDoResponse = {
  data: Todo
}
