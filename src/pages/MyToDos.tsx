import { useEffect, useState } from 'react'
import styles from './MyToDos.module.css'
import { getAllToDos } from '../api/to-dos/to-dos'
import { useAuthState } from '../context/context'
import { Todo } from '../interfaces/to-dos'

function MyToDos() {
  const { token } = useAuthState()
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      const res = await getAllToDos(token ?? '')
      setTodos(res.data)
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
          todos.map((toDo: Todo) => (
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
