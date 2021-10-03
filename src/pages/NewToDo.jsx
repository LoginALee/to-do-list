import React from 'react'
import styles from './NewToDo.module.css'

const NewToDo = () => (
  <div className={styles.mainContainer}>
    <h1>New To Do</h1>
    <button type="submit" className={styles.plus}>
      +
    </button>
  </div>
)

export default NewToDo
