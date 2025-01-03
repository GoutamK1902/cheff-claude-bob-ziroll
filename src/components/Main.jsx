import React, { useState } from "react";
import Form from "./Form";
import Ingredients from "./Ingredients";

export default function Main(props) {
  // console.log(JSON.stringify(props));
  const [ingredientsList, setIngredientsList] = useState([]);
  console.log(ingredientsList);
  return (
    <>
      <Form updatedList={setIngredientsList} />
      <Ingredients ingredientsList={ingredientsList} />
    </>
  );
}
