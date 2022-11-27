import React, { useRef, useState, useEffect } from 'react'

export default function OneCell({
  changeHandler,
  index,
  initialBoardCell,
}: {
  changeHandler(myRef: React.RefObject<HTMLInputElement>): void
  index: number
  initialBoardCell: string
}) {
  const [inputValue, setInputValue] = useState(() => (initialBoardCell == '.' ? '' : initialBoardCell))
  const ref = useRef<HTMLInputElement>(null)
  const applyRightBorder = (index - 2) % 9 == 0 || (index - 5) % 9 == 0 || (index - 8) % 9 == 0
  const applyBotBorder = (index >= 18 && index <= 26) || (index >= 45 && index <= 53) || index >= 72

  const deleteHandler = (e: KeyboardEvent) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setInputValue('')
    }
  }
  return (
    <input
      type='text'
      style={{
        // borderRight: applyRightBorder ? '3px solid black' : ' ',
        // borderBottom: applyBotBorder ? '3px solid black' : ' ',
      }}
      maxLength={1}
      onChange={(e) => {
        if (e.target.value.match(/^[1-9]$/)) {
          setInputValue(e.target.value)
          changeHandler(ref)
        }
      }}
      id={'' + index}
      ref={ref}
      value={inputValue}
      onKeyDown={(e) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
          setInputValue('')
        }
      }}
      // readOnly={inputValue.length>0}
      autoComplete='off'
    />
  )
}
