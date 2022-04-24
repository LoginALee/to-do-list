/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'
import styles from './NewToDo.module.css'
import { createToDo } from '../api/to-dos/to-dos'
import { useAuthState } from '../context/context'

interface Itask {
  name: string
  createdAt: Date
}

function NewToDo() {
  const [showForm, setShowForm] = useState(false)
  const [todoName, setTodoName] = useState('')
  const { token } = useAuthState()

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      todo: {
        title: todoName,
        done: false,
      },
    }
    const response = await createToDo(token, data)

    if (response.id) {
      setTodoName('')
      alert('To-do creado correctamente')
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondContainer}>
        <div>
          <h1>New To-Do</h1>
          <button
            id="showFormBtn"
            onClick={showFormHandler}
            type="button"
            className={styles.plus}
          >
            +
          </button>
        </div>
        {showForm && (
          <form onSubmit={submitForm} className={styles.form}>
            <div className={styles.formContainer}>
              <ul id="toDoList" className={styles.inputsContainer}>
                <li>
                  <label htmlFor="title">
                    To-do name:
                    <input
                      className={styles.input}
                      type="text"
                      name="title"
                      id="title"
                      value={todoName}
                      onChange={(e) => setTodoName(e.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <button
                    id="submitBtn"
                    name="submit"
                    type="submit"
                    className={styles.button}
                  >
                    Add
                  </button>
                </li>
              </ul>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default NewToDo
