import React, { Component } from "react";

class Bindingdemo extends Component {
  constructor() {
    super();
    this.state = { subject: " " };
  }

  changelife = (myproject) => {
    this.setState({ subject: myproject.target.value });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "blueviolet" }}>Project</h1>
        <input type="text" onChange={this.changelife}></input>
        <p>{this.state.subject}</p>
      </div>
    );
  }
}
export default Bindingdemo;
