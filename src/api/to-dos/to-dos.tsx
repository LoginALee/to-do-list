/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fetchFromAPI, postToAPI } from '../requests'

const ROOT_URL = process.env.REACT_API_URL ?? 'http://localhost:3001'

export const getAllToDos = async (token: string) => {
  try {
    const response = await fetchFromAPI(token, `${ROOT_URL}/todos`)

    if (response.data) {
      return response.data
    }
    return response
  } catch (error) {
    return error
  }
}

export const getToDo = () => {}

export const createToDo = async (token: string, data: any) => {
  try {
    const response = await postToAPI(token, `${ROOT_URL}/todos`, data)

    if (response.data) {
      return response.data
    }
    return response
  } catch (error) {
    return error
  }
}

export const deleteToDo = () => {}
