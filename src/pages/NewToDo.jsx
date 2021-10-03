import React from 'react'
import styles from './NewToDo.module.css'

const NewToDo = () => (
  <div className={styles.mainContainer}>
    <div className={styles.secondContainer}>
      <div>
        <h1>New To-Do</h1>
        <button type="submit" className={styles.plus}>
          +
        </button>
      </div>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <ul className={styles.inputsContainer}>
            <li>
              <label htmlFor="task">To-do:</label>
              <input
                className={styles.input}
                type="text"
                name="task"
                id="task"
              />
            </li>
            <li>
              <button type="submit" className={styles.button}>
                Add
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
)

export default NewToDo
