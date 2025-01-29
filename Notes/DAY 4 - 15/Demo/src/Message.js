import React, {useState} from "react";
export const Message =() =>{
    const[message1,setMessage1] = useState('Click the button to see a message ');
    const[message2,setMessage2] = useState('Click the button to see a message ');

    const handleClick1 =() =>{
        setMessage1('Hello,you clicked the button');
        
    };

    const handleClick2 =() =>{
        setMessage2('This is Saishree!!');
    };
    return(
        <div>
            <h1>{message1}</h1>
            <button onClick={handleClick1}>Click Me!</button>
            <h1>{message2}</h1>
            <button onClick={handleClick2}>Click to Know</button>
        </div>
    )
}