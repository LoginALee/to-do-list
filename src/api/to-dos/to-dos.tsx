import { fetchFromAPI, postToAPI } from '../requests'
import {
  GetAllToDosResponse,
  CreateToDoResponse,
  NewTodoData,
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

export const getToDo = () => {}

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

export const deleteToDo = () => {}
