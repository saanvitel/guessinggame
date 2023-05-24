import React, { useState } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      rightNumber: Math.floor(Math.random() * 100),
      isRight: false,
      status: "Guess a number between 0-100",
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
            <h1 class="header">guess the number</h1>
            <h3>The correct number was: {this.state.rightNumber}</h3>
            <h3>{this.state.status}</h3>
            {/* <label> Guess a number between 0-100: </label> */}
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
          <h1 class="header"> guess the number</h1>
          <div className="App">
            <div className="Game">
              {/* <h1 class="header">guess the number</h1> */}
              <h3>{this.state.status}</h3>
              {/* <label> Guess a number between 0-100: </label> */}
              <input
                min="1"
                max="100"
                type="text"
                onInput={this.handleChange}
                value={this.state.number}
              ></input>
              <button onClick={this.handleGuess}>Guess!</button>
            </div>
            <div className="History">
              <p>History:</p>
              {this.state.history.map((g, i) => (
                <p>
                  Guess {i + 1}: {g}
                </p>
              ))}
            </div>
          </div>
        </>
      );
    }
  }
}

export default App;
