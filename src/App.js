import React, { useState } from 'react';


export default function App(props) {
  const [number, setNumber] = useState("");
  const [rightNumber, setRightNumber]  = useState(Math.floor(Math.random() * 100));
  const [isRight, setIsRight] = useState(false);
  let status;

  console.log("right", rightNumber)

  const handleChange = event => {
    setNumber(event.target.value)
  }
  console.log("guess", number);

  console.log(isRight);
  if (number == rightNumber && isRight===false ) {
    status ="You got it correct!"
    console.log(isRight);
  } else if (number > rightNumber) {
    status ="too high!"
  } else if (number < rightNumber) {
    status="too low!"
  }

  return (
    <>
    <div className='App'>
      <h3>{status}</h3>
      <label> Guess a number: </label>
      <input onChange={handleChange} value={number}></input> 
    </div>
    </>
  );
}

// Log to console
console.log('Hello console')