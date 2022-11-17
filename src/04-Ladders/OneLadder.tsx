import React, { useState } from 'react'
const LADDER_IMAGE = 'https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png'
import styles from './OneLadder.module.css'

export default function OneLadder({
  index,
  hoverHandler,
  hoverExitHandler,
  hover,
}: {
  index: number
  hoverHandler(id: number): void
  hoverExitHandler(): void
  hover: boolean
}) {
  return (
    <img
      src={LADDER_IMAGE}
      className={hover ? styles['scale-up'] : ''}
      onMouseEnter={() => {
        hoverHandler(index)
        console.log('IN')
      }}
      onMouseOut={() => {
        hoverExitHandler()
        console.log('OUT')
      }}
      id={'' + index}
      alt='Ladder'
    />
  )
}
