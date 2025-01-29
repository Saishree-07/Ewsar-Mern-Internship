import React,{useState, useEffect} from 'react'

export const Timer = () => {
    const [seconds, setSecounds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecounds(prevSeconds => prevSeconds + 1);
        },500);
        return () => clearInterval(interval);
        
    },[]);
    return (
    <div>
        <h2> Timer: </h2>
        <p> {seconds}seconds have passing.</p>
            </div>
  );
}