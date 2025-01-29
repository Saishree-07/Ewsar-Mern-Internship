import React from 'react'
import { C2 } from './C2'

export const C1 = () => {
    var msg = "Hello from comopent 1";
    console.log(msg);
  return (
    <div>
        <h1> COMPONENT 1</h1>
        <h1>{msg}</h1>
        <C2 msg={msg} />
    </div>
  )
}
