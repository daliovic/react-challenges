import React from 'react'

export default function DisplayNested({ nestedObject }: any) {
  let level = 0;
  let divs: Array<JSX.Element> = [];
  const getObj = (obj: any): Array<JSX.Element> => {
    Object.keys(obj).map(key => {

      if (typeof obj[key] === "object") {
        divs.push(<div style={{ marginLeft: 40 * level }} key={key}><b>{key}</b>:</div>);
        level++
        return getObj(obj[key]);
      } else {
        divs.push(<div style={{ marginLeft: 40 * level }} key={key}><b>{key}</b>: {obj[key]}</div>);
      }
    });
    return divs;
  }
  return (


    <div>
      {getObj(nestedObject)}
    </div>
  )
}
