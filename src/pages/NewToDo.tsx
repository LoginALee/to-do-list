import React, { useState } from 'react'
import styles from './NewToDo.module.css'
import { createToDo } from '../api/to-dos/to-dos'
import { useAuthState } from '../context/context'

function NewToDo() {
  const [showForm, setShowForm] = useState(false)
  const [todoName, setTodoName] = useState('')
  const { token } = useAuthState()

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      todo: {
        title: todoName,
        done: false,
      },
    }

    void createToDo(token ?? '', data).then((response) => {
      console.log(response)
      if (response?.data?.id) {
        setTodoName('')
        alert('To-do creado correctamente')
      }
    })
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
