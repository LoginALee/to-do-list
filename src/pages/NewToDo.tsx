/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'
import styles from './NewToDo.module.css'
import toDos from '../lib/fakeDB'

interface Itask {
  name: string
  createdAt: Date
}

function NewToDo() {
  const [showForm, setShowForm] = useState(false)
  const [form] = useState<Itask | any>([])
  const [numberOfTask, setNumberOfTask] = useState(1)

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const tasks: Itask[] = []
    const element = e.target as unknown as HTMLInputElement

    for (let i = 0; i < e?.target?.length; i += 1) {
      if (element[i].name.includes('task')) {
        tasks.push({ name: element[i].value, createdAt: new Date() })
      }
    }
    const newTodo = {
      id: toDos.length + 1,
      name: element[0].value,
      tasks,
    }
    toDos.push(newTodo)
  }

  const addTask = () => {
    setNumberOfTask((prev) => prev + 1)
    const addTaskBtn = document.getElementById('addTaskButton')
    const li = document.createElement('li')

    const label = document.createElement('label')
    label.textContent = 'Task: '
    label.htmlFor = `task${numberOfTask + 1}`

    const input = document.createElement('input')
    input.className = `${styles.input}`
    input.type = 'text'
    input.name = `task${numberOfTask + 1}`
    input.id = `task${numberOfTask + 1}`

    li.appendChild(label)
    li.appendChild(input)
    addTaskBtn?.before(li)
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
                  <label htmlFor="to_do_name">
                    To-do name:
                    <input
                      className={styles.input}
                      type="text"
                      name="to_do_name"
                      id="to_do_name"
                      value={form?.name}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="task1">
                    Task:
                    <input
                      className={styles.input}
                      type="text"
                      name="task1"
                      id="task1"
                      value={form?.task1}
                    />
                  </label>
                </li>
                <button
                  id="addTaskButton"
                  type="button"
                  onClick={addTask}
                  className={styles.plus}
                >
                  +
                </button>
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
