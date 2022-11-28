import React, { useState } from 'react'
import DisplayNested from './DisplayNested'
import WordByWord from '../20-WordByWord/WordByWord'
import { FaRedo } from 'react-icons/fa'

export default function Typewriter() {
  const [nestedObject, setNestedObject] = useState<any | undefined>({
    taxi: 'a car licensed to transport passengers in return for payment of a fare',
    food: {
      sushi: 'a traditional Japanese dish of prepared rice accompanied by seafood and vegetables',
      apple: {
        Honeycrisp: 'an apple cultivar developed at the MAES Horticultural Research Center',
        Fuji: 'an apple cultivar developed by growers at Tohoku Research Station',
      },
    },
  })
  const reset = () => {
    setNestedObject(null)
  }

  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
        This simply displays a given nested object entries Recursively. It is not interactive yet.
        <i>{`\n{taxi: 'a car licensed to transport passengers in return for payment of a fare',
    food: {
      sushi: 'a traditional Japanese dish of prepared rice accompanied by seafood and vegetables',
      apple: {
        Honeycrisp: 'an apple cultivar developed at the MAES Horticultural Research Center',
        Fuji: 'an apple cultivar developed by growers at Tohoku Research Station',},
    },}`}</i>
        {/* <button className='btn btn-success' onClick={reset}>
          Reset <FaRedo size={12} />
        </button> */}
        <DisplayNested nestedObject={nestedObject} />
      </div>
    </div>
  )
}
