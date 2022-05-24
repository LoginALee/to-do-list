/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Action, ContextInitialState } from '../interfaces/authReducer'

const user: ContextInitialState['userDetails'] = localStorage.getItem(
  'currentUser',
)
  ? JSON.parse(localStorage.getItem('currentUser') ?? '').user
  : ''

const token: ContextInitialState['token'] = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') ?? '').token
  : ''

export const initialState: ContextInitialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (state: ContextInitialState, action: Action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        loading: true,
      }
    case 'REQUEST_SIGNUP':
      return {
        ...state,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userDetails: action.payload.userDetails,
        token: action.payload.token,
        loading: false,
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        userDetails: action.payload.userDetails,
        token: action.payload.token,
        loading: false,
      }
    case 'LOGOUT':
      return {
        ...initialState,
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return initialState
  }
}
