import { fireEvent, render, screen } from '@testing-library/react'
import { validUser } from '../mocks/models/user'
import App from '../App'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('<App/ >', () => {
  beforeAll(async () => {
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

  it('Renders and shows To-dos', async() => {
    const burgerMenu = await screen.findByTestId("burguer-menu")
    await userEvent.click(burgerMenu)
    const myTodosLink = await screen.findByText('My to-dos')
    await act(async () => {
      await userEvent.click(myTodosLink)
      await screen.getByText('My to-dos')
    })
  })

})