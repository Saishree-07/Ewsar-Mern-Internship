import React, {useState,useEffect } from 'react'

const CountComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
    document.title = 'You Clicked  $ { count }  times'

    return () =>{
        document.title = 'React App'
    };
    },[count]);
  return (
    <div>
      <p>You clicked  {count}  times</p>
      <button onClick={() => setCount(count+1)}>Click Here</button>
    </div>
  )
}

export default CountComponent