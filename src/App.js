import React, { useState } from "react";

// export default function App(props) {
//   const [number, setNumber] = useState("");
//   const [rightNumber, setRightNumber]  = useState(Math.floor(Math.random() * 100));
//   const [isRight, setIsRight] = useState(false);
//   let status;

//   console.log("right", rightNumber)

//   const handleChange = event => {
//     setNumber(event.target.value)
//   }
//   console.log("guess", number);

//   console.log(isRight);
//   if (number == rightNumber && isRight===false ) {
//     status ="You got it correct!"
//     console.log(isRight);
//   } else if (number > rightNumber) {
//     status ="too high!"
//   } else if (number < rightNumber) {
//     status="too low!"
//   }

//   return (
//     <>
//     <div className='App'>
//       <h3>{status}</h3>
//       <label> Guess a number: </label>
//       <input onChange={handleChange} value={number}></input>
//     </div>
//     </>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      rightNumber: Math.floor(Math.random() * 100),
      isRight: false,
    };
  }

  handleChange = (event) => {
    this.setState({ number: event.target.value });
  };

  render() {
    let status;
    if (
      this.state.number == this.state.rightNumber &&
      this.state.isRight === false
    ) {
      status = "You got it correct!";
      console.log(this.state.isRight);
    } else if (this.state.number > this.state.rightNumber) {
      status = "too high!";
    } else if (this.state.number < this.state.rightNumber) {
      status = "too low!";
    }

    return (
      <>
        <div className="App">
          <h3>{status}</h3>
          <label> Guess a number: </label>
          <input onChange={this.handleChange} value={this.state.number}></input>
        </div>
      </>
    );
  }
}

export default App;
// Log to console
console.log("Hello console");
