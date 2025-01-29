import React from 'react'
import { useSelector } from 'react-redux';

export const Users = () => {
    const users=useSelector((state)=>state.userinfo.users);
    console.log(users)
  return (
    <div>
        <section className='Users'>
        <h1>Users Page</h1>
        <img 
        src='https://i.pinimg.com/736x/eb/aa/6e/ebaa6edb2fb56139dc313119220a6a90.jpg'
            alt='Users' 
            style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
/>
        </section>
    </div>
  )
}
