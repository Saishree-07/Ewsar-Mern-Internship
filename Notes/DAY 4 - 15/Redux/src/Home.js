import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './slices/userslice' 

export const Home = () => {
  const dispatch = useDispatch()
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    function handleChange(event){
        const {name,value}=event.target;
        setName((curr)=>{
            return {
                ...curr,
                [name] : value
            };
        });
    }
    console.log(name);
    const add =(event)=>{
      event.preventDefault();
    dispatch(addUser(name));
    }
  return (
    <div>
        <section className='Home'>
        <h1> Home Page </h1>
        <img 
  src='https://wallpaperaccess.com/full/6810534.jpg' 
  alt='Home' 
  style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
/>
  <br></br>
  <label>Name</label>
  <br></br>
  <input type='text' value={name.name} onChange={handleChange}></input>
  <br></br>
  <label>Age</label>
  <br></br>
  <input type='number' value={age.age}onChange={handleChange}></input>
  <br></br>
  <button onClick={add}>ADD</button>
        </section>
    </div>
  )
}
