import { fireEvent, render, screen } from '@testing-library/react'
import { validUser } from '../mocks/models/user'
import App from '../App'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

let burgerMenu

describe('<App/ >', () => {
  beforeEach(async () => {
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
    burgerMenu = await screen.findByTestId('burguer-menu')
  })

  it('Renders and shows NewToDo page', async () => {
    await userEvent.click(burgerMenu)
    const myTodosLink = await screen.findByText('New to-do')
    await act(async () => {
      await userEvent.click(myTodosLink)
      await screen.getByText('New To-Do')
    })
  })

  it('Can create a To-do', async () => {
    await userEvent.click(burgerMenu)
    const newTodoLink = await screen.findByText('New to-do')
    await act(async () => {
      await userEvent.click(newTodoLink)
      await screen.getByText('New To-Do')
    })
    const addBtn = screen.getByTestId('addToDoBtn')
    userEvent.click(addBtn)

    const toDoNameInput = await screen.findByLabelText('To-do name:')
    await fireEvent.change(toDoNameInput, { target: { value: 'Test name' } })

    const submitBtn = screen.getByText('Add')
    await userEvent.click(submitBtn)

    await userEvent.click(burgerMenu)
    await act(async () => {
      const myTodosLink = await screen.findByText('My to-dos')
      console.log('ale', myTodosLink)
      await userEvent.click(myTodosLink)
      expect(screen.findByText('Test name'))
    })
  })
})
