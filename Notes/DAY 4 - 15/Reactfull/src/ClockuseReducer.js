import React,{useReducer} from 'react'

function reducerfuction(state,action){
    return {count:state.count+1 }
}
export const Clock = () => {

    const[state,dispatch]=useReducer(reducerfuction,{count:55})
  
    function Increment() {
        dispatch()
    }
    function Decrement() {
        dispatch()
    }
      console.log(state);
  return (
    <div>
       <h1>COUNT: {state.count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>    
    </div>
  )
}
