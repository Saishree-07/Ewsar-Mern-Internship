import React from 'react'
import { Child } from './child'

export const Parents = (props) => {
    const message = "Hello from Parent"
  return (
    <div>
        <h1> This is parent component!</h1>
        <Child message =  {message} />
    </div> 
  )
}
