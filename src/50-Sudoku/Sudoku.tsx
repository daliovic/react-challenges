import React, { useEffect, useRef, useState } from 'react'
import OneCell from './OneCell'
import './Sudoku.css'
type Board = {
  puzzle: string
}
export default function Sudoku() {
  const dummy = {
    puzzle: '9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254',
  }
  const [board, setBoard] = React.useState<Board>({
    puzzle: '9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254',
  })

  const cellChangeHandler = (ref: React.RefObject<HTMLInputElement>) => {
    console.log(ref.current)
    let id: number = 0
    if (ref.current?.id) {
      id = +ref.current?.id
      let newBoard = board.puzzle.split('')
      newBoard[id] = ref.current.value
      setBoard({ puzzle: newBoard.join('') })
    }
  }
  const inputRef = useRef<HTMLInputElement>(null)
  const [result, setResult] = useState<Board>()
  const [cells, setCells] = useState<JSX.Element[]>()
  const solveSudoku = (board: Board) => {
    // fetch('https://solve-sudoku.p.rapidapi.com/', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     'X-RapidAPI-Key': 'a0239a2020msh4ae74748e1bf107p1789a9jsnc8725f40aaf6',
    //     'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
    //   },
    //   body: JSON.stringify(board),
    //   // body: JSON.stringify(dummy),
    // })
    //   .then((data) => {
    //     // console.log(data.json())
    //     return data.json()
    //   })
    //   .then((data) => {
    //     setResult({ puzzle: data.solution })
    //     console.log(data)
    //   })

    setResult({ puzzle: '971536842286974513354812679563421798497658321128793465732145986645289137819367254' })
  }

  useEffect(() => {
    console.log('Board: ', board)
    console.log('result: ', result)
  }, [result])

  return (
    <div className='d-flex flex-column justify-content-center w-100 align-items-middle'>
      <div className={`board mx-auto`}>
        <div className='hline' style={{ '--line-index': "0" } as React.CSSProperties} />
        <div className='hline' style={{ '--line-index': "1" } as React.CSSProperties} />
        <div className='hline' style={{ '--line-index': "2" } as React.CSSProperties} />
        <div className='hline' style={{ '--line-index': "3" } as React.CSSProperties} />
        <div className='vline' style={{ '--line-index': "0" } as React.CSSProperties} />
        <div className='vline' style={{ '--line-index': "1" } as React.CSSProperties} />
        <div className='vline' style={{ '--line-index': "2" } as React.CSSProperties} />
        <div className='vline' style={{ '--line-index': "3" } as React.CSSProperties} />
        {!result
          ? board.puzzle.split('').map((cell, i) => {
              return <OneCell key={i} index={i} initialBoardCell={cell} changeHandler={cellChangeHandler} />
            })
          : result.puzzle.split('').map((cell, i) => {
              return <input className={`${cell===board.puzzle[i]?"correct":"wrong"}`} type='text' key={i} value={cell} readOnly />
            })}
      </div>

      <div className='mx-auto'>
        <button
          onClick={() => {
            solveSudoku(board)
          }}>
          Solve
        </button>
      </div>
    </div>
  )
}
