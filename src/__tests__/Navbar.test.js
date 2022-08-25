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

  it('Can log in', async () => {
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

  it('Can sign up', async () => {
    render(<App />)
    const signUpLink = await screen.findByText('Sign up')
    userEvent.click(signUpLink)

    const emailInput = await screen.findByLabelText('Email')
    const userInput = await screen.findByLabelText('User name')
    const passwordInput = await screen.findByLabelText('Password')
    const passwordConfirmInput = await screen.findByLabelText(
      'Confirm password',
    )
    const signUpBtn = await screen.getAllByText('Sign up')[2]

    await fireEvent.change(emailInput, { target: { value: 'John@gmail.com' } })
    await fireEvent.change(userInput, { target: { value: 'John' } })
    await fireEvent.change(passwordInput, {
      target: { value: 'test' },
    })
    await fireEvent.change(passwordConfirmInput, {
      target: { value: 'test' },
    })
    await userEvent.click(signUpBtn)

    const signInLink = await screen.findByText('Sign in')
    userEvent.click(signInLink)

    const loginBtn = await screen.getAllByText('Login')[1]

    const userInput2 = await screen.findByLabelText('User name')
    const passwordInput2 = await screen.findByLabelText('Password')

    await fireEvent.change(userInput2, { target: { value: 'John' } })
    await fireEvent.change(passwordInput2, {
      target: { value: 'test' },
    })
    await userEvent.click(loginBtn)
    await screen.findByText('Welcome, John!')
  })

  it('Can log out', async () => {
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
