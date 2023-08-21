import React, { Component } from "react";
import { ReactPropTypes } from "react";

class PropTypeValidation extends Component {
  render() {
    return (
      <div>
        <h1>Array:{this.props.propArray}</h1>
        <h1>Number:{this.props.propNumber}</h1>
      </div>
    );
  }
}

PropTypeValidation.defaultProps = {
  propArray: [1, 2, 3, 4],
  propNumber: 10,
};
export default PropTypeValidation;

//property validation is pending in this code
