import React from 'react'
import { C4 } from './C4'

export const C3 = ({msg}) => {
  return (
    <div>
        <h3> COMPONENT 3</h3>
        <C4  msg={msg} />
    </div>
  )
}
