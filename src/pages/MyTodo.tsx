/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import Draggable, { DraggableData } from 'react-draggable'
import { TiDelete } from 'react-icons/ti'
import styles from './MyTodo.module.css'
import { updateToDo, deleteToDo } from '../api/to-dos/to-dos'
import { useAuthState } from '../context/context'
import { NewTodoData } from '../interfaces/to-dos'

function MyTodo({
  title,
  done,
  doneRef,
  id,
}: {
  id: number
  title: string
  done: boolean
  doneRef: React.RefObject<HTMLDivElement>
}) {
  const toDoData = {
    todo: {
      id,
      title,
      done: true,
    },
  }
  const [doneLocal, setDoneLocal] = useState<boolean>(done)
  const [deltaPosition, setDeltaPosition] = useState<{ x: number; y: number }>({
    x: doneLocal ? Number(doneRef?.current?.offsetLeft) : 0,
    y: 0,
  })
  const { token } = useAuthState()

  const setToDoPosition = (data: NewTodoData, x: number, y: number) => {
    setDeltaPosition({
      ...deltaPosition,
      x,
      y,
    })
    void updateToDo(token ?? '', data).then((response) => {
      if (response?.data?.id) {
        setDoneLocal(data.todo.done)
      }
    })
  }

  const onStop = (e, data: DraggableData) => {
    const { x, y } = data

    if (
      (doneRef && doneRef.current && x >= doneRef?.current?.offsetLeft) ||
      (doneRef && doneRef.current && y >= doneRef?.current?.offsetTop)
    ) {
      setToDoPosition(toDoData, doneRef?.current?.offsetLeft, 0)
    } else {
      setToDoPosition(
        { ...toDoData, todo: { ...toDoData.todo, done: false } },
        0,
        0,
      )
    }
  }

  const onDelete = () => {
    if (window.confirm('Are  you sure you want to delete this To-Do?')) {
      void deleteToDo(token ?? '', toDoData.todo).then((response) => {
        if (response?.status === 204) {
          location.reload()
        } else {
          window.alert('Error deleting this To-Do')
        }
      })
    }
  }

  return (
    <Draggable position={deltaPosition} onStop={onStop}>
      <div className={styles.paper}>
        <div className={styles.pin}>
          <div className={styles.shadow} />
          <div className={styles.metal} />
          <div className={styles.bottomCircle} />
        </div>
        <p>{title}</p>
        <p>{`${doneLocal ? '✅' : '⏳'}`}</p>
        <TiDelete size="1.5em" className={styles.trash} onClick={onDelete} />
      </div>
    </Draggable>
  )
}

export default MyTodo
