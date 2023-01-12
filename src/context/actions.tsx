import { Dispatch } from 'react'
import { insecurePostToAPI } from '../api/requests'
import {
  LoginResponse,
  LoginPayload,
  SignUpPayload,
} from '../interfaces/authActions'
import { Action } from '../interfaces/authReducer'

const ROOT_URL = process.env.REACT_API_URL || 'http://localhost:3001'

export async function loginUser(
  dispatch: Dispatch<Action>,
  loginPayload: LoginPayload,
) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const response = await insecurePostToAPI(
      JSON.stringify(loginPayload),
      `${ROOT_URL}/login`,
    )

    const res = response.data as LoginResponse

    if (res.user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { userDetails: res.user, token: res.token },
      })
      localStorage.setItem('currentUser', JSON.stringify(res))
      return res
    }

    dispatch({ type: 'LOGIN_ERROR', payload: { errorMessage: res.error } })
  } catch (error) {
    throw new Error('Login error')
  }
  return undefined
}

export function logout(dispatch: Dispatch<Action>) {
  dispatch({ type: 'LOGOUT' })
  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')
}

export async function signUp(
  dispatch: Dispatch<Action>,
  signUpPayload: SignUpPayload,
) {
  try {
    dispatch({ type: 'REQUEST_SIGNUP' })
    const response = await insecurePostToAPI(
      JSON.stringify(signUpPayload),
      `${ROOT_URL}/users`,
    )

    const res = response.data as LoginResponse

    if (res.user) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: res })
      localStorage.setItem('currentUser', JSON.stringify(res))
      return res
    }

    dispatch({ type: 'LOGIN_ERROR', payload: { errorMessage: res.error } })
  } catch (error) {
    throw new Error('Logout error')
  }
  return undefined
}
