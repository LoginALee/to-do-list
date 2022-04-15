/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useReducer } from 'react'
import { AuthReducer } from './reducer'

const initialState = {
  userDetails: {
    email: '',
    username: '',
  },
  token: '',
  loading: false,
  errorMessage: null,
}

const AuthStateContext = React.createContext(initialState)
const AuthDispatchContext = React.createContext({})

export function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }

  return context
}

export function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
