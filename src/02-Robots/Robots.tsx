import React, { useRef } from 'react'
import OneRobot from './OneRobot'

export default function Robots() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [robots, setRobots] = React.useState<any>([])
    const addRobot = () => {
        setRobots([...robots, <OneRobot key={inputRef.current?.value} name={`${inputRef.current?.value}`} />])
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>

            <div>
                <h1>Robots</h1>
                <input type="text" ref={inputRef} />
                <button onClick={addRobot}>Add Robots</button>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}>
                {robots.map((robot: any) => robot)}
            </div>
        </div>
    )
}
