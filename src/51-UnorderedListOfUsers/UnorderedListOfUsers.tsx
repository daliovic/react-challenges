import React, { useEffect } from 'react'

export default function UnorderedListOfUsers() {
  const people = [
    { name: 'Ben', age: 23 },
    { name: 'Bob', age: 30 },
    { name: 'Sam', age: 18 },
    { name: 'Sue', age: 51 },
    { name: 'Joe', age: 12 },
  ]

  people.sort((a, b) => {
    return a.age > b.age ? 1 : -1
  })
  useEffect(() => {}, [])
  return (
    <div>
      <ul>
        {people.map((item) => {
          let key = Math.floor(Math.random()*10000)
          return <li key={key}>{`${item.age} ${key}`}</li>
        })}
      </ul>
    </div>
  )
}
