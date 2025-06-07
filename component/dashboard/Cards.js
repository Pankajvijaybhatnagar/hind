import React from "react";

const Cards = ({ cardData }) => {
  // Converts camelCase or PascalCase to Title Case
  const formatTitle = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
      .replace(/^./, (char) => char.toUpperCase()); // Capitalize first letter
  };

  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.length; // Just show the number
    } else if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value); // fallback
    } else {
      return value;
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="row gap-2 d-flex flex-wrap container">
      {cardData.map((card, i) => (
        <div key={i} className="card text-bg-light m-1 text-center" style={{ maxWidth: "18rem" }}>
          <div className="card-body">
            <h1 className="card-title fw-bolder">{formatValue(card.value)}</h1>
          </div>
          <div className="card-footer">{formatTitle(card.name)}</div>
        </div>
      ))}
    </div>
  );
};


export default Cards;
