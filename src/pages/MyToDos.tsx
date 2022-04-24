/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import styles from './MyToDos.module.css'
import { getAllToDos } from '../api/to-dos/to-dos'
import { useAuthState } from '../context/context'

interface TodoI {
  created_at: string
  done: boolean
  id: number
  title: string
  updated_at: string
  user_id: number
}

function MyToDos() {
  const { token } = useAuthState()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const res = await getAllToDos(token)
      setTodos(res)
      return res
    }

    void getTodos()
  }, [])

  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>My To-Dos</h1>
      </div>
      <div className={styles.secondContainer}>
        {todos.length &&
          todos.map((toDo: TodoI) => (
            <div key={toDo.id} className={styles.toDosElements}>
              <h3>{toDo.title}</h3>
              <p>{toDo.done ? 'Listo!' : 'Pendiente'}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyToDos
