import React, { useState } from 'react'
const Form = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword]=useState('')
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleChange1 = (e) =>{
        setEmail(e.target.value);
    }
    const handleChange2 = (e) =>{
        setPassword(e.target.value);
    }
  return (
    <div>
        <form>
            <label>
                Name:
                <br></br>
                <input type="text" value={name} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                Email:
                <br></br>
                <input type ="email" value={email} onChange={handleChange1} />
                </label>
                <br></br>
                <label>
                Password:
                <br></br>
                <input type="password" value={password} onChange={handleChange2} />
                </label>
        </form>
      <p>Your name is:{name}</p>
      <p>Your email is:{email}</p>
      <p>Password:{password}</p>
    </div>
  )
}
export default Form