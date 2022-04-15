/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useReducer } from 'react'

const user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') ?? '').user
  : ''

const token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser') ?? '').token
  : ''

export const initialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true,
      }
    case 'REQUEST_SIGNUP':
      return {
        ...initialState,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        userDetails: action.payload.user,
        token: action.payload.token,
        loading: false,
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...initialState,
        userDetails: action.payload.user,
        token: action.payload.token,
        loading: false,
      }
    case 'LOGOUT':
      return {
        ...initialState,
        userDetails: '',
        token: '',
      }
    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }
    case 'SIGNUP_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
