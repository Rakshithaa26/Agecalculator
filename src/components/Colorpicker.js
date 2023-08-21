import React, { useState } from "react";
import "./Colorpicker.css";
// We will create this CSS file later

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
      <button
        style={{ backgroundColor: selectedColor }}
        onClick={() => setShowColors(!showColors)}
      >
        Pick a color
      </button>
      {showColors && (
        <div className="color-list">
          {colors.map((color) => (
            <div
              key={color}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ColorPicker;
