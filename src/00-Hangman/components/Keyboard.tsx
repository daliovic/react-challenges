import React from 'react'
import styles from './Keyboard.module.css'
const KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')
type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter,disabled=false }: KeyboardProps) {
    return (
        <div style={{
            display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: "0.5rem"
        }}>{KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
                <button
                    onClick={() => addGuessedLetter(key)}
                    className={`${styles.btn} ${isActive?styles.active:""} ${isInactive?styles.inactive:""}`}
                    disabled={isActive || isInactive || disabled} 
                    key={key}>{key}
                </button>)
        })}</div>
    )
}
