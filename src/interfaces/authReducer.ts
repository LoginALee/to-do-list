import { User } from './authActions'

export type ContextInitialState = {
  userDetails?: User
  token?: string
  loading?: boolean
  errorMessage?: string | null
}

export type Action =
  | { type: 'REQUEST_LOGIN' }
  | { type: 'LOGIN_SUCCESS'; payload: ContextInitialState }
  | { type: 'REQUEST_SIGNUP' }
  | { type: 'SIGNUP_SUCCESS'; payload: ContextInitialState }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN_ERROR'; payload: ContextInitialState }
  | { type: 'SIGNUP_ERROR'; payload: ContextInitialState }
