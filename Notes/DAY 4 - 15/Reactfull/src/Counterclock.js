import React,{useEffect, useState} from 'react'

export const Counter = () => {
  const[count,setCount] =useState(0);
  useEffect(()=> {document.title=`value ${count}`;},[count]);

  return (
    <div>
       <h1>COUNT: {count}</h1>
       <h1>{document.title}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>    
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
