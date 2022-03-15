import { insecurePostToAPI } from '../api/requests'

const ROOT_URL = process.env.API_URL || ''

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const response = await insecurePostToAPI(
      `${ROOT_URL}/login`,
      JSON.stringify(loginPayload),
    )
    const data = await response.json()

    if (data?.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data })
      localStorage.setItem('currentUser', JSON.stringify(data))
      return data
    }

    dispatch({ type: 'LOGIN_ERROR', error: data?.errors[0] })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
  return undefined
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' })
  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')
}
