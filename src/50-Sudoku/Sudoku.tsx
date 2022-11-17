import React, { useEffect, useRef, useState } from 'react'
import OneCell from './OneCell'
import s from './Sudoku.module.css'
type Board = {
  sudoku: string[]
}
export default function Sudoku() {
  const dummy = {
    sudoku: ['9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254'],
  }
  const [board, setBoard] = React.useState<Board>({
    sudoku: ['9715  842  69   1    8 2  95     79   76 83   28     57  1 5    4   91  819  7254'],
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const [result, setResult] = useState<Board>()
  const [cells, setCells] = useState<JSX.Element[]>()

  const solveSudoku = (board: Board) => {
    let newBoard = board.sudoku[0].replace(/ /g, '.')
    // let newBoard = board.sudoku[0]
    console.log({ sudoku: [newBoard] })

    fetch('http://localhost:9090/http://127.0.0.1:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sudoku: [newBoard] }),
      // body: JSON.stringify(dummy),
    })
      .then((data) => {
        //console.log(data.json())
        return data.json()
      })
      .then((data) => {
        console.log(data.data)
        setBoard({ sudoku: [data.data[0].solution] })
        return data.data[0]
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const cellChangeHandler = (ref: React.RefObject<HTMLInputElement>) => {
    console.log(ref.current)
    let id: number = 0
    if (ref.current?.id) {
      id = +ref.current?.id
      let newBoard = board.sudoku[0].split('')
      newBoard[id] = ref.current.value

      console.log("New Board: ",newBoard)

      setBoard({ sudoku: [newBoard.join('')] })
    }
  }

  useEffect(() => {
    let tempCells: JSX.Element[] = []
    console.log("Board: ",board)

    for (let i = 0; i < 81; i++)
      tempCells.push(
        <OneCell key={i} index={i} initialBoardCell={board.sudoku[0][i]} changeHandler={cellChangeHandler} />
      )

    setCells(tempCells)
  }, [board])

  return (
    <div>
      <div className={`${s.board}`}>{cells}</div>
      <button
        onClick={() => {
          solveSudoku(board)
        }}>
        Solve
      </button>
    </div>
  )
}
