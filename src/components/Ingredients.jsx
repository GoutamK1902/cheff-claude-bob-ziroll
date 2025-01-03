import React from "react";
import "../App.css";

export default function Ingredients(props) {
  const renderIngredientsList = props.ingredientsList;
  return (
    <>
      <ul
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {renderIngredientsList.map((item, index) => (
          <li key={index} id={"item " + index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
