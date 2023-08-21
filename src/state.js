import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.showbaby = this.showbaby.bind(this);
  }
  showbaby() {
    this.setState({ show: !this.state.show });
  }
  render() {
    const result = this.state.show ? (
      <div>
        <h3>I am mom</h3>
        <button onClick={this.showbaby}>I am</button>
      </div>
    ) : (
      <div>
        <h3>I am wife</h3>
        <button onClick={this.showbaby}>I gi</button>
      </div>
    );
    return (
      <div>
        <h1>welcome to my family</h1>
        {result}
      </div>
    );
  }
}
export default State;
