import React,{useContext} from 'react'
import { themeContext } from './App'

export const User = ({theme}) => {const
    contextValue = useContext(themeContext)
    console.log(contextValue)

  return (
    <div style={contextValue.style}>
        <h1>User</h1>
        </div>
  )
}
