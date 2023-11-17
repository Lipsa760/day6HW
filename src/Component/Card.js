import React from "react";

const Card = ({ name, color, code }) => {
  const cardStyle = {
    backgroundColor: color,
    width: "150px",
    height: "180px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    gap: "5px",
    margin: "20px 10px",
    padding: "25px",
  };

  return (
    <div style={cardStyle}>
      <p>{name}</p>
      <p>{code}</p>
    </div>
  );
};

export default Card;
