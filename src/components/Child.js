import React, { Component } from "react";

class Child extends Component {
  onmommy = (daught) => {
    this.props.parentCallbackshudi(daught.target.myname.value);
    daught.preventDefault(); //preventdefault method helps to call back child to parent and avoids to accessing to server.
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onmommy}>
          {/* //onsubmit is keyword */}
          <input
            type={"text"}
            name="myname"
            placeholder="enter my name"
          ></input>
          <br />
          <input type={"submit"} value={"submit"}></input>
        </form>
      </div>
    );
  }
}
export default Child;
