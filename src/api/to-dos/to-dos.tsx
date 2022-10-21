import { AxiosPromise } from 'axios'
import { fetchFromAPI, postToAPI, patchToAPI, deleteToAPI } from '../requests'
import {
  GetAllToDosResponse,
  CreateToDoResponse,
  NewTodoData,
  Todo,
  UpdateToDoResponse,
} from '../../interfaces/to-dos'

const ROOT_URL = process.env.REACT_API_URL ?? 'http://localhost:3001'

export const getAllToDos = async (
  token: string,
): Promise<GetAllToDosResponse> => {
  const response: GetAllToDosResponse = await fetchFromAPI(
    token,
    `${ROOT_URL}/todos`,
  )

  return response
}

export const updateToDo = async (
  token: string,
  data: NewTodoData,
): Promise<UpdateToDoResponse> => {
  const response: UpdateToDoResponse = await patchToAPI(
    token,
    `${ROOT_URL}/todos/${data.todo.id ?? ''}}`,
    data,
  )

  return response
}

export const createToDo = async (
  token: string,
  data: NewTodoData,
): Promise<CreateToDoResponse> => {
  const response: CreateToDoResponse = await postToAPI(
    token,
    `${ROOT_URL}/todos`,
    data,
  )

  return response
}

export const deleteToDo = async (
  token: string,
  data: Todo,
): Promise<AxiosPromise> => {
  const response = await deleteToAPI(token, `${ROOT_URL}/todos/${data.id}`)

  return response
}
