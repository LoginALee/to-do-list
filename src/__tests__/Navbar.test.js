import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react'
import App from '../App'
import * as context from '../context/actions'
import userEvent from '@testing-library/user-event'

jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')
Object.setPrototypeOf(window.localStorage.setItem, jest.fn())

const loginUserFn = jest.fn(() => {
  const res = {
    user: {
      id: 1,
      email: 'test',
      password_digest: 'test',
      created_at: 'test',
      updated_at: 'test',
      username: 'test',
    },
    token: 'test',
    error: null,
  }
  localStorage.setItem('currentUser', JSON.stringify(res))
  return res
})

context.loginUser = jest.fn(() => {
  return loginUserFn
})

beforeAll(() => {
  render(
    <Router>
      <Navbar />
    </Router>,
  )
})

// afterAll(() => {
//   localStorageMock.clear()
// })

describe('<Navbar />', () => {
  it('Has the before login links', async () => {
    const whyUsLink = await screen.findByText('Why us?')
    const signUpLink = await screen.findByText('Sign up')
    const signInLink = await screen.findByText('Sign in')

    expect(whyUsLink).toBeDefined()
    expect(signInLink).toBeDefined()
    expect(signUpLink).toBeDefined()
  })

  it('Has the after login links', async () => {
    render(<App />)
    const signInLink = await screen.findByText('Sign in')
    userEvent.click(signInLink)

    const userInput = await screen.findByLabelText('User name')
    const passwordInput = await screen.findByLabelText('Password')
    const loginBtn = await screen.getAllByText('Login')[1]

    await fireEvent.change(userInput, { target: { value: 'test' } })
    await fireEvent.change(passwordInput, { target: { value: 'test' } })
    await userEvent.click(loginBtn)

    expect(context.loginUser).toHaveBeenCalledTimes(1)
  })
})
