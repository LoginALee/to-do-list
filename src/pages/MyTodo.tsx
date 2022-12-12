import { useState } from 'react'
import Draggable, { DraggableData } from 'react-draggable'
import { TiDelete } from 'react-icons/ti'
import styles from './MyTodo.module.css'
import { updateToDo } from '../api/to-dos/to-dos'
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
    const toDoData = {
      todo: {
        id,
        title,
        done: true,
      },
    }

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
        <TiDelete
          size="1.5em"
          className={styles.trash}
          onClick={() => console.log('heey')}
        />
      </div>
    </Draggable>
  )
}

export default MyTodo
