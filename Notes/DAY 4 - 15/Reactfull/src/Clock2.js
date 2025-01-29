import React,{useReducer} from 'react'

function reducerfuction(state,action){
    switch (action.type){
        case "Increment":
        return {count:state.count+1 }

        case "Decrement":
            return {count:state.count-1}
    }
}
export const ClockRS = () => {

    const[state,dispatch]=useReducer(reducerfuction,{count:55})
  
    function Increment() {
        dispatch({type:"Increment"})
    }
    function Decrement() {
        dispatch({type:"Decrement"})
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
