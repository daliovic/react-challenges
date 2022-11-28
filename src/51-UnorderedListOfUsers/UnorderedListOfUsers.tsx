import React, { useEffect } from 'react'

export default function UnorderedListOfUsers() {
  const users = [
    { name: 'Ben', age: 23 },
    { name: 'Bob', age: 30 },
    { name: 'Sam', age: 18 },
    { name: 'Sue', age: 51 },
    { name: 'Joe', age: 12 },
  ]

  users.sort((a, b) => {
    return a.age > b.age ? 1 : -1
  })
  useEffect(() => {}, [])
  return (
    <div>
      <p>Sort an array of objects of users by age</p>
      <i>
        {' '}
        {`users = [
          { name: 'Ben', age: 23 },
          { name: 'Bob', age: 30 },
          { name: 'Sam', age: 18 },
          { name: 'Sue', age: 51 },
          { name: 'Joe', age: 12 },
  ]
  `}
      </i><br/> <br/>
      <ul>
        {users.map((item) => {
          let key = Math.floor(Math.random() * 10000)
          return <li key={key}>{`Name: ${item.name} Age: ${item.age}`}</li>
        })}
      </ul>
    </div>
  )
}
