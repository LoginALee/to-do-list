/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react'
import Draggable, { DraggableData } from 'react-draggable'
import { TiDelete } from 'react-icons/ti'
import { BsFillPencilFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

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
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [currentTitle, setCurrentTitle] = useState(title)
  const [deltaPosition, setDeltaPosition] = useState<{ x: number; y: number }>({
    x: doneLocal ? Number(doneRef?.current?.offsetLeft) : 0,
    y: 0,
  })
  const { token } = useAuthState()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (currentTitle === '' || !isEditing) return

      void updateToDo(token ?? '', {
        ...toDoData,
        todo: { ...toDoData.todo, title: currentTitle },
      }).then((response) => {
        if (response?.data?.id) {
          alert('To-do updated!')
          setCurrentTitle(currentTitle)
        }
      })
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [currentTitle])

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
    <motion.div layout data-isopen={isEditing}>
      <Draggable position={deltaPosition} onStop={onStop}>
        <div className={styles.paper} data-isopen={isEditing}>
          <div className={styles.columnWrapper}>
            <div className={styles.iconsWrapper}>
              <div className={styles.pin}>
                <div className={styles.shadow} />
                <div className={styles.metal} />
                <div className={styles.bottomCircle} />
              </div>
              <div>
                <BsFillPencilFill
                  size="1em"
                  style={{ visibility: doneLocal ? 'hidden' : 'visible' }}
                  className={styles.edit}
                  onClick={() => setIsEditing(!isEditing)}
                />
                <TiDelete
                  size="1.3em"
                  className={styles.trash}
                  onClick={onDelete}
                />
              </div>
            </div>
            <div className={styles.infoWrapper}>
              <input
                className={styles.title}
                type="text"
                id="title"
                value={currentTitle}
                contentEditable={isEditing}
                style={{ cursor: isEditing ? 'text' : 'grab' }}
                onChange={(e) =>
                  setCurrentTitle((e.target as HTMLInputElement).value)
                }
              />
              <p>{`${doneLocal ? '✅' : '⏳'}`}</p>
            </div>
          </div>
        </div>
      </Draggable>
    </motion.div>
  )
}

export default MyTodo
