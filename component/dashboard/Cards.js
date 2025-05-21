import React from "react";

const Cards = () => {
  const cardData = [
    {
      name: "Total Students",
      value: 2502,
      },
    {
      name: "Today joined",
      value: 25,
    },
    {
      name: "Last 7 days",
      value: 99,
    },
    
    {
      name: "Last 30 days",
      value: 300,
    },
  ];
  return (
    <div style={{display:"flex", flexWrap:"wrap"}} classNameName="row gap-2 d-flex flex-wrap container">
      
          {cardData.map((card, i) => (
          <div
          className="card text-bg-light m-1 text-center "
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-body">
                      <h1 className="card-title fw-bolder">{ card.value}</h1>
          </div>
                  <div className="card-footer">{ card.name}</div>
        </div>
      
      ))}
    </div>
  );
};

export default Cards;
