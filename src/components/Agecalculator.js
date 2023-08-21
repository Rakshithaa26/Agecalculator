import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    if (isNaN(birthDate)) {
      setAge(null);
      return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setAge(age);
  };

  return (
    <div>
      <input type="date" value={birthdate} onChange={handleInputChange} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;
