/* eslint-disable react/no-array-index-key */
import React from 'react'
import styles from './MyToDos.module.css'
import toDos from '../lib/fakeDB'

function MyToDos() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>My To-Dos</h1>
      </div>
      <div className={styles.secondContainer}>
        {toDos.length &&
          toDos.map((toDo) => (
            <div key={toDo.id} className={styles.toDosElements}>
              <h3>{toDo.name}</h3>
              {toDo.tasks.length &&
                toDo.tasks.map((task, i) => (
                  <ul key={i}>
                    <li key={task.name}>{task.name}</li>
                  </ul>
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyToDos
