// import React, { useEffect, useState } from 'react'
// import OneLadder from './OneLadder'
// import styles from './OneLadder.module.css'
// export default function Ladders() {
//   const [ladders, setLadders] = useState<JSX.Element[]>([])
//   const [isHover, setIsHover] = useState(false)
//   const [current, setCurrent] = useState(-1)

//   const hoverHandler = (id: number) => {
//     setCurrent(id)
//     setIsHover(true)
//   }
//   const hoverExitHandler = () => {
//     setIsHover(false)
//   }

//   const initLadders = () => {
//     let arr = []
//     for (let i = 0; i < 5; i++) {
//       arr.push(
//         <OneLadder
//           key={`${i}`}
//           index={i}
//           hoverExitHandler={hoverExitHandler}
//           hoverHandler={hoverHandler}
//           hover={i>=current}
//         />
//       )
//     }
//     setLadders(arr)
//   }

//   useEffect(() => {
//     initLadders()
//   }, [isHover,current])

//   // useEffect(() => {
//   //   console.log(current, 'ladders ', ladders)
//   //   if (isHover) {
//   //     let a = ladders.map((item, i) => {
//   //       if (item.key && +item.key >= current) {
//   //         return (
//   //           <OneLadder
//   //             key={`${i}`}
//   //             index={i}
//   //             hoverExitHandler={hoverExitHandler}
//   //             hoverHandler={hoverHandler}
//   //             hover={true}
//   //           />
//   //         )
//   //       } else {
//   //         return (
//   //           <OneLadder
//   //             key={`${i}`}
//   //             index={i}
//   //             hoverExitHandler={hoverExitHandler}
//   //             hoverHandler={hoverHandler}
//   //             hover={false}
//   //           />
//   //         )
//   //       }
//   //     })
//   //     console.log(a)
//   //     setLadders(a)
//   //   } else {
//   //     //initLadders()
//   //   }
//   // }, [current, isHover])

//   return (
//     <div
//       style={{
//         display: 'grid',
//         justifyContent: 'center',
//         alignContent: 'center',
//         gap: 0,
//         margin: 0,
//       }}>
//       {ladders.map((item, i) => item)}
//     </div>
//   )
// }

import React from 'react'

export default function Ladders() {
  return (
    <div>Ladders</div>
  )
}
