import React,{useState, useReducer} from 'react';
const ACTIONS={
    INCREMENT:'increment',
    DECREMENT:'decrement',
    MULTIPLY:'multiply',
    DIVIDE:'divide',
    RESET:'reset'
}
function reducerfunction(state,action)
{
    switch(action.type)
    {
        case ACTIONS.INCREMENT:
            return {count:state.count+1}
        case ACTIONS.DECREMENT:
            return {count:state.count-1}
        case ACTIONS.MULTIPLY:
            return {count:state.count*2}
        case ACTIONS.DIVIDE:
            return {count:state.count/2}
        case ACTIONS.RESET:
            return {count:0}    
       
    }

}
export const Usereducer=()=>
{
    const[state,dispatch]=useReducer(reducerfunction,{count:55})
    function increment()
    {
        dispatch({type:"increment"})
    }
    function decrement()
    {
        dispatch({type:"decrement"})
    }
    function multiply()
    {
        dispatch({type:"multiply"})
    }
    function divide()
    {
        dispatch({type:"divide"})
    }   
    function reset()
    {
        dispatch({type:"reset"})
    }  
    console.log(state)
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
