import React from 'react'

const HEAD = (<div key="HEAD" style={{
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    border: '5px solid black',
    position: 'absolute',
    top: '25px',
    right: '-10px',
}
}></div>)
const BODY = (<div key="BODY" style={{
    width: '5px',
    height: '60px',
    background: 'black',
    position: 'absolute',
    top: '50px',
    right: '0px',
}
}></div>)
const RIGHT_ARM = (<div key="RIGHT_ARM" style={{
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '75px',
    right: '-50px',
    transform: 'rotate(-30deg)',
    transformOrigin: 'left bottom',
}
}></div>)
const LEFT_ARM = (<div key="LEFT_ARM" style={{
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '75px',
    right: '5px',
    transform: 'rotate(30deg)',
    transformOrigin: 'right bottom',
}
}></div>)
const RIGHT_LEG = (<div key="RIGHT_LEG" style={{
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '105px',
    right: '-45px',
    transform: 'rotate(60deg)',
    transformOrigin: 'left bottom',
}
}></div>)
const LEFT_LEG = (<div key="LEFT_LEG" style={{
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '105px',
    right: '0px',
    transform: 'rotate(-60deg)',
    transformOrigin: 'right bottom',
}
}></div>)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps = {
    numberOfGuesses: number
}
export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ height: "25px", width: "5px", background: "black", marginLeft: "60px", position: "absolute", top: 0, right: 0 }}></div>
            <div style={{ height: "5px", width: "100px", background: "black", marginLeft: "60px" }}></div>
            <div style={{ height: "200px", width: "5px", background: "black", marginLeft: "60px" }}></div>
            <div style={{ height: "5px", width: "125px", background: "black" }}></div>
        </div>

    )
}
