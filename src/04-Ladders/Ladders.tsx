import React, { useEffect, useState } from 'react'
import OneLadder from './OneLadder'
const LADDER_IMAGE = 'https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png'
import styles from './OneLadder.module.css'
export default function Ladders() {
  const [ladders, setLadders] = useState<JSX.Element[]>([])
  const [isHover, setIsHover] = useState(false)
  const [current, setCurrent] = useState(-1)

  const hoverHandler = () => {}
  const hoverExitHandler = () => {}

  const onHover = (i: number) => {
    setCurrent(i)
  }

  const onExit = () => {
    setCurrent(-1)
  }

  const initLadders = () => {
    let arr = []
    for (let i = 0; i < 5; i++) {
      arr.push(
        <img
          src={LADDER_IMAGE}
          key={i}
          onMouseEnter={() => {
            onHover(i)
          }}
          onMouseLeave={onExit}
          id={`${i}`}
          className={i >= current ? styles['scale-up'] : ''}
        />
      )
    }
    setLadders(arr)
  }

  useEffect(() => {
    initLadders()
  }, [current])

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 0,
        margin: 0,
      }}>
      {ladders.map((item, i) => item)}
    </div>
  )
}
