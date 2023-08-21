import React from "react";

function Keydemo(props) {
  return (
    <div>
      <li>I am a {props.brand}</li>
    </div>
  );
}

function Car() {
  const cars = [
    { id: 1, brand: "BMW" },
    { id: 2, brand: "Maruthi" },
    { id: 3, brand: "Audi" },
  ];

  return (
    <div>
      <h1>Different types of Cars</h1>
      <ul>
        {cars.map((mycar) => (
          <Keydemo key={mycar.id} brand={cars.brand} />
        ))}
      </ul>
    </div>
  );
}
export default Keydemo;
