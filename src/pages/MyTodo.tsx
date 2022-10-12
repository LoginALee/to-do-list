import { useState } from 'react'
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from 'react-draggable'
import styles from './MyTodo.module.css'

function MyTodo({
  title,
  done,
  doneRef,
}: {
  title: string
  done: boolean
  doneRef: React.RefObject<HTMLDivElement>
}) {
  const [deltaPosition, setDeltaPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const onStop = (e, data: DraggableData) => {
    const { x, y } = data

    if (
      (doneRef && doneRef.current && x >= doneRef?.current?.offsetLeft) ||
      (doneRef && doneRef.current && y >= doneRef?.current?.offsetTop)
    ) {
      setDeltaPosition({
        ...deltaPosition,
        x: doneRef?.current?.offsetLeft,
        y: 0,
      })
    } else {
      setDeltaPosition({
        ...deltaPosition,
        x: 0,
        y: 0,
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
        <p>{`${done ? '✅' : '⏳'}`}</p>
      </div>
    </Draggable>
  )
}

export default MyTodo
