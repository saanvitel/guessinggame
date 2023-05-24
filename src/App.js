import React, { useState } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      rightNumber: Math.floor(Math.random() * 100),
      isRight: false,
      status: "You haven't guessed yet :D",
      history: [],
    };
  }

  handleChange = (event) => {
    this.setState({ number: event.target.value });
    console.log("history in handle change", this.state.history);
  };

  handleGuess = () => {
    let feedback;
    if (
      this.state.number == this.state.rightNumber &&
      this.state.isRight === false
    ) {
      feedback = "You got it correct!";
      console.log(this.state.isRight);
    } else if (this.state.number > this.state.rightNumber) {
      feedback = "too high!";
    } else if (this.state.number < this.state.rightNumber) {
      feedback = "too low!";
    }
    this.setState({ status: feedback });
    this.setState({ history: [...this.state.history, this.state.number] });
    console.log("history", this.state.history);
  };

  render() {
    if (
      this.state.history.length === 7 ||
      this.state.status === "You got it correct!"
    ) {
      return (
        <>
          <div className="App">
            <h3>The correct number was: {this.state.rightNumber}</h3>
            <h3>{this.state.status}</h3>
            <label> Guess a number: </label>
            <input
              disabled
              type="text"
              onInput={this.handleChange}
              value={this.state.number}
            ></input>
            <button disabled onClick={this.handleGuess}>
              Guess!
            </button>
            <p>History:</p>
            {this.state.history.map((g, i) => (
              <p>
                Guess #{i + 1}: {g}
              </p>
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          {console.log("history in render", this.state.history)}
          <div className="App">
            <h3>{this.state.status}</h3>
            <label> Guess a number: </label>
            <input
              min="1"
              max="100"
              type="text"
              onInput={this.handleChange}
              value={this.state.number}
            ></input>
            <button onClick={this.handleGuess}>Guess!</button>
            <p>History:</p>
            {this.state.history.map((g, i) => (
              <p>
                Guess #{i + 1}: {g}
              </p>
            ))}
          </div>
        </>
      );
    }
  }
}

export default App;
// Log to console
console.log("Hello console");
