import React, { useRef } from 'react'
import OneRobot from './OneRobot'

export default function Robots() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [input, setInput] = React.useState('')
  const [robots, setRobots] = React.useState<any>([])
  const addRobot = () => {
    const newRobot = inputRef.current?.value
    if (newRobot) {
      setRobots([...robots, <OneRobot key={inputRef.current?.value} name={`${inputRef.current?.value}`} />])
      setInput('')
    } else {
      inputRef.current!.style.border = '1px solid red'
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        placeContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <div className='d-flex gap-3 flex-column col-8'>
        <h3>Enter a value here</h3>
        <div className='d-flex col-12 gap-4'>
          <input
            type='text'
            className='form-control'
            ref={inputRef}
            onChange={(e) => {
              console.log(e.target.value)

              if (inputRef.current) {
                setInput(e.target.value)
              }
              inputRef.current!.style.border = '1px solid #ced4da'
            }}
            value={input}
          />
          <button className='btn button' onClick={addRobot}>
            Add Robots
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 0.9fr)',
        }}>
        {robots.map((robot: any) => robot)}
      </div>
    </div>
  )
}
