import React,{ useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset1 = () => {
        setCount(100);
    };
    const reset2 = () => {
        setCount(count - 5);
    };
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset1}>Reset1</button>
            <button onClick = {reset2}>Reset2</button>
        </div>
    );
}

export default Counter