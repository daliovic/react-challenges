import React, { createContext, useContext, useState } from 'react'
import User from './User'
interface UserContextType {
  users: UserStateType
  setUserState: React.Dispatch<React.SetStateAction<UserStateType>>
}
interface UserStateType {
  Bob: boolean
  Gary: boolean
  Jessica: boolean
  Sam: boolean
  Eric: boolean
}
export const UserContext = createContext<UserContextType | null>(null)

export default function UsersApp() {
  const [userState, setUserState] = useState<UserStateType>({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true,
  })
  return (
    <UserContext.Provider value={{ users:userState, setUserState }}>
      I used React Context with Typescript to randomly flip a user's status <br/><br/>
      <User />
    </UserContext.Provider>
  )
}
