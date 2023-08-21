import React, { Component } from "react";

class Binding extends Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      color: "blue",
    };
  }

  rachu = () => {
    this.setState({ color: "green" });
  };

  render() {
    return (
      <div>
        <h1>
          My car is {this.state.brand} and it is {this.state.color}
          <button onClick={this.rachu}>Change color of my car</button>
        </h1>
        <h2>My car name is {this.props.name}</h2>
      </div>
    );
  }
}
export default Binding;
