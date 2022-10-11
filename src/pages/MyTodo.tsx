import Draggable from 'react-draggable'
import styles from './MyTodo.module.css'

function MyTodo({ title, done }) {
  return (
    <Draggable>
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
