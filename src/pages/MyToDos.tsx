import { useEffect, useState } from 'react'
import styles from './MyToDos.module.css'
import { getAllToDos } from '../api/to-dos/to-dos'
import { useAuthState } from '../context/context'
import { Todo } from '../interfaces/to-dos'
import MyTodo from './MyTodo'

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
        <div className={styles.thirdContainer}>
          <h2>To be done ⏳</h2>
          {todos.length &&
            todos.map((toDo: Todo) => (
              <MyTodo key={toDo.id} title={toDo.title} done={toDo.done} />
            ))}
        </div>
        <div className={styles.thirdContainer}>
          <h2>Done ✅</h2>
        </div>
      </div>
    </div>
  )
}

export default MyToDos
