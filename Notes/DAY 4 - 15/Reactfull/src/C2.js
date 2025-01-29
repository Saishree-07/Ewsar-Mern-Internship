import React from 'react'
import { C3 } from './C3'

export const C2 = ({msg}) => {
  return (
    <div>
        <h2> COMPONENT 2</h2>
        <C3 msg={msg} />
    </div>
  )
}
