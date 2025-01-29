import React, { useState } from "react";
export function Array1(){
    const one = [1, 2, 5,7];
  const two = [13, 15, 16];
  const three=[14,45,41];
  
  const [result, setResult] = useState([]);

  const add = () => {
    const combined =[...one,...two,...three];//spread operator
    setResult(combined); 
  };

  return (
    <div>
        <h1>array1: {one.join(", ")}</h1>
        <h1>array2: {two.join(", ")}</h1>
        <h1>array3: {three.join(", ")}</h1>
      <button onClick={add}>Combine Arrays</button>
      <p>Result: {result.join(", ")}</p>
    </div>
  );
}
