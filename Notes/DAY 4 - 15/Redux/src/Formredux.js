import React, { useState } from 'react';

const Formredux = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleChange(e) {
    const { value, type } = e.target;
    if (type === 'text') {
      setName(value);
    } else if (type === 'number') {
      setAge(value);
    }
  }
console.log(name)
console.log(age)
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />

      <label>Age</label>
      <input
        type="number"
        value={age}
        onChange={handleChange}
      />

      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default Formredux;