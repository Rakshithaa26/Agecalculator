import React from "react";

//functional component
function Car(props) {
  return <li>i have {props.things}</li>;
}

function Garage() {
  const own = ["bike", "car", "mobile"];
  return (
    <div>
      <h1>I have all this</h1>
      <ul>
        {own.map((thing) => (
          <Car things={thing} />
        ))}
      </ul>
    </div>
  );
}
export default Garage;
