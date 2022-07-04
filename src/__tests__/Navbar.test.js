import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { validUser } from '../mocks/models/user'
import App from '../App'
import userEvent from '@testing-library/user-event'

beforeAll(() => {
  render(
    <Router>
      <Navbar />
    </Router>,
  )
})

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

    await fireEvent.change(userInput, { target: { value: validUser.username } })
    await fireEvent.change(passwordInput, {
      target: { value: validUser.password },
    })
    await userEvent.click(loginBtn)
    await screen.findByText(`Welcome, ${validUser.username}!`)
  })

  it('Changes to pre-login links after logout', async () => {
    render(<App />)
    const signInLink = await screen.findByText('Sign in')
    userEvent.click(signInLink)

    const userInput = await screen.findByLabelText('User name')
    const passwordInput = await screen.findByLabelText('Password')
    const loginBtn = await screen.getAllByText('Login')[1]

    await fireEvent.change(userInput, { target: { value: validUser.username } })
    await fireEvent.change(passwordInput, {
      target: { value: validUser.password },
    })
    await userEvent.click(loginBtn)
    await screen.findByText(`Welcome, ${validUser.username}!`)

    const logoutBtn = await screen.findByText('Log out')
    await userEvent.click(logoutBtn)

    const signUpLink = await screen.findByText('Sign up')

    expect(signUpLink).toBeDefined()
    expect(signInLink).toBeDefined()
  })
})
