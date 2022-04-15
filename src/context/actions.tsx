/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { insecurePostToAPI } from '../api/requests'

const ROOT_URL = process.env.REACT_API_URL ?? 'http://localhost:3001'

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const response = await insecurePostToAPI(
      JSON.stringify(loginPayload),
      `${ROOT_URL}/login`,
    )

    if (response.data?.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
      localStorage.setItem('currentUser', JSON.stringify(response.data))
      return response.data
    }

    dispatch({ type: 'LOGIN_ERROR', error: response.data?.errors[0] })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
  return undefined
}

export async function logout(dispatch) {
  await dispatch({ type: 'LOGOUT' })
  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')
}

export async function signUp(dispatch, signUpPayload) {
  try {
    dispatch({ type: 'REQUEST_SIGNUP' })
    const response = await insecurePostToAPI(
      JSON.stringify(signUpPayload),
      `${ROOT_URL}/users`,
    )

    if (response.data?.user) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data })
      localStorage.setItem('currentUser', JSON.stringify(response.data))
      return response.data
    }

    dispatch({ type: 'SIGNUP_ERROR', error: response.data?.errors[0] })
  } catch (error) {
    dispatch({ type: 'SIGNUP_ERROR', error })
  }
  return undefined
}
