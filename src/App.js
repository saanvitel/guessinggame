import React, { useState } from 'react';


export default function App(props) {
  const [number, setNumber] = useState("");
  const [rightNumber, setRightNumber]  = useState(Math.floor(Math.random() * 100));
  const [isRight, setIsRight] = useState(false);

  console.log("right", rightNumber)

  const handleChange = event => {
    setNumber(event.target.value)
  }
  console.log("guess", number);

  console.log(isRight);
  if (number == rightNumber && isRight===false ) {
    setIsRight(true);
    console.log(isRight);
  }

  return (
    <>
    <div className='App'>
      <h1>{isRight ? "You won!" : "Not there yet"}</h1>
      <label> Guess a number: </label>
      <input onChange={handleChange} value={number}></input> 
    </div>
    </>
  );
}

// Log to console
console.log('Hello console')