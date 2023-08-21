import React, { useState } from "react";
import "./Paragraphcount.css";

// We will create this CSS file later

const ParagraphWordCounter = () => {
  const [paragraph, setParagraph] = useState("");

  const handleChange = (e) => {
    setParagraph(e.target.value);
  };

  const wordCount = paragraph.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="container">
      <textarea
        placeholder="Enter your paragraph here..."
        value={paragraph}
        onChange={handleChange}
        rows={5}
      />
      <div className="word-count">Word Count: {wordCount}</div>
      <div className="paragraph-display">
        <strong>Paragraph:</strong>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default ParagraphWordCounter;
