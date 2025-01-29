import React, { useState } from 'react'

export const Form = () => {
    const[name,uname] = useState('');
    function handlechange(event){
        uname(event.target.value);
    }
  return (
    <div>
       <form>
        <label>name</label>
        <input type="text" value={name} onChange={handlechange}></input>
        <h1>Your name is: {name}</h1>
       </form>
    </div>
  )
}
