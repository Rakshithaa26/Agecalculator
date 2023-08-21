import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    name: " ",
  };
  handleshudi = (childshudi) => {
    this.setState({ name: childshudi });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <Child parentCallbackshudi={this.handleshudi} />
        {name}
      </div>
    );
  }
}
export default Parent;
