import { useCallback, useEffect, useState } from "react";
import words from './assets/wordList.json'
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))


  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters(current => [...current, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const k = e.key

      if (!k.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(k)

    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }

  }, [guessedLetters, isWinner, isLoser]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const k = e.key
      if (k !== 'Enter') return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }

  }, []);

  return (
    <div style={{
      maxWidth: '800px', display: 'flex',
      flexDirection: 'column', gap: '2rem',
      margin: '0 auto', alignItems: 'center',
    }}>
      <div style={{ fontSize: '2rem', textAlign: 'center', }}>
        {isWinner && 'You won!'}
        {isLoser && 'You lost!'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={
            guessedLetters.filter(letter => wordToGuess.includes(letter))
          }
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter} />
      </div>
    </div>
  )
}

export default App
