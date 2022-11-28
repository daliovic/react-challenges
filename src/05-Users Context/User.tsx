import React, { useContext, useEffect } from 'react'
import { UserContext } from './UsersApp'

type UserStateType = {
  Bob: boolean
  Gary: boolean
  Jessica: boolean
  Sam: boolean
  Eric: boolean
  [key: string]: any
}
export default function User() {
  const ctx = useContext(UserContext)
  let users = ctx?.users as object
  useEffect(() => {
    setTimeout(() => {
      //pick a random value from array of keys
      let randomUser = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
      ctx?.setUserState((prevState: UserStateType) => {
        return {
          ...prevState,
          [randomUser]: !prevState[randomUser],
        }
      })
    }, 2000)
  }, [ctx])
  return (
    <>
      {}
      {Object.entries(ctx?.users as object).map((item, i) => (
        <div key={i} className='d-flex w-50'>
          <div className='col-3'>{`${item[0]}`}</div>
          <div className='col-3'>{`${item[1] ? '🟢' : '🔴'}`}</div>
        </div>
      ))}
    </>
  )
}
