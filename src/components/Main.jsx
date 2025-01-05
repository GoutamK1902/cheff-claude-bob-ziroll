import React, { useState } from "react";
import Form from "./Form";
import Ingredients from "./Ingredients";

export default function Main(props) {
  // console.log(JSON.stringify(props));
  const [ingredientsList, setIngredientsList] = useState([
    "All the main indian spices",
    "Paneer",
    "Tamatar",
    "Dhaniya",
  ]);
  // RECIPE COMPONENT
  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  // console.log(ingredientsList);
  return (
    <>
      <Form updatedList={setIngredientsList} />
      <Ingredients
        ingredientsList={ingredientsList}
        toggleRecipeShown={toggleRecipeShown}
        toShowRecipe={recipeShown}
      />
    </>
  );
}
