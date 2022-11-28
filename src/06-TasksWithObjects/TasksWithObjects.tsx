import React, { useState } from 'react'
import styles from './TasksWithObjects.module.css'
import { LayoutGroup, motion } from 'framer-motion'
type listType = {
  [key: string]: any
}
type taskType = {
  [key: string]: boolean
}

export default function TasksWithObjects() {
  const INITIAL_LIST = {
    'Organize closet': [
      { 'Donate old clothes and shoes': false },
      { 'Buy new shelf': false },
      { 'Put in shelf by color': false },
    ],
    'Finish homework': [
      { 'Finish math homework': false },
      { 'Finish science homework': false },
      { 'Finish Reactjs homework': false },
    ],
    'Apply for jobs': [{ 'Update CV': false }, { 'Search LinkedIn': false }],
  }

  const [list, setList] = useState<listType>(INITIAL_LIST)
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },
  }
  const headingVariants = {
    hidden: (custom: number) => ({
      x: '50px',
      opacity: 0,
      transition: {
        duration: 1,
        delay: custom * 0.4,
        ease: 'easeIn',
      },
    }),
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: custom * 0.3,
        when: 'beforeChildren',
        ease: 'easeOut',
      },
    }),
  }

  return (
    <LayoutGroup>
      <div className='d-flex justify-content-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className={`${styles['container']}`}>
          {Object.entries(list).map((item, ii) => {
            return (
              <motion.div
                variants={headingVariants}
                initial='hidden'
                animate='visible'
                custom={ii}
                key={item[0]}
                layout
                className={`${styles['task-group']}`}>
                <div className={`${styles['category-title']}`}>
                  <p>{item[0]}</p>
                </div>
                <motion.div className={`${styles['category-heading']} ${styles.bolder}`}>
                  <div>To be Completed</div>
                  <div>Completed</div>
                </motion.div>
                {item[1].map((task: taskType, i: number) => {
                  let t = Object.entries(task)
                  let toBeCompleted = t[0][1] ? t[0] : ''
                  let completed = t[0][1] ? '' : t[0]

                  return (
                    <motion.div layout key={`${item} ${i}`} className={styles['category-heading']}>
                      <motion.div
                        layout
                        className={completed ? styles.task : ''}
                        onClick={() => {
                          if (completed)
                            setList((prev: listType) => {
                              let newTasks = [...prev[item[0]]]
                              newTasks[i] = { [`${t[0][0]}`]: !t[0][1] }
                              console.log(newTasks, i)
                              return { ...prev, [item[0]]: newTasks }
                            })
                        }}>
                        {completed}
                      </motion.div>
                      <motion.div
                        layout
                        className={toBeCompleted ? styles.task : ''}
                        onClick={() => {
                          if (toBeCompleted)
                            setList((prev: listType) => {
                              let newTasks = [...prev[item[0]]]
                              newTasks[i] = { [`${t[0][0]}`]: !t[0][1] }
                              console.log(newTasks, i)
                              return { ...prev, [item[0]]: newTasks }
                            })
                        }}>
                        {toBeCompleted}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </LayoutGroup>
  )
}
