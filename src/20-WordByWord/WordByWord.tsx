import React, { useEffect } from 'react'

export default function WordByWord() {

  const [inputValue, setInputValue] = React.useState('')
  const [displayString, setDisplayString] = React.useState<string[]>([])
  const [counter, setCounter] = React.useState(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    //setDisplayString([])
    //setCounter(e.target.value.split(' ').length)
  }

  const blurHandler = () => {
    setDisplayString([inputValue.split(' ')[0]])
  }

  useEffect(() => {
    //blurHandler()
    //setDisplayString(inputValue.split(' ').slice(0, counter))
    const timer = setTimeout(() => {
      console.log(displayString)
      const input = inputValue.split(' ')
      if (counter < input.length + 1) {
        setCounter(counter + 1)
        setDisplayString(input.slice(0, counter))
      }
    }, 700)

    // setDisplayString(inputValue.split(' ').slice(0, counter-1))




  }, [displayString])





  return (
    <div>
      <p>When focusing out of the text input, the words will appear one by one </p>
      <input type="text" onChange={changeHandler} onBlur={blurHandler} value={inputValue} ref={inputRef} />
      <p>{`${displayString.join(' ')}`}</p>


    </div>
  )
}
