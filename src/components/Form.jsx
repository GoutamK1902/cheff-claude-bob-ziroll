import React, { useState } from "react";
import "../App.css";
import Ingredients from "./Ingredients";

export default function Form(props) {
  // const [ingredient, setIngredient] = useState("");
  const addIngredient = (event) => {
    event.preventDefault();
    /*
    USESTATE is USED HERE
    setIngredient("");
    ingredient != ""
      ? props.updatedList((prevVal) => [
          ...prevVal,
          ingredient.split("")[0].toUpperCase() +
            ingredient.slice(1, ingredient.length).toLowerCase(),
        ])
      : null;
    */
    //  --------------------------
    /*FormDATA method */
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    // console.log(newIngredient);

    newIngredient != ""
      ? props.updatedList((prevVal) => [
          ...prevVal,
          newIngredient.split("")[0].toUpperCase() +
            newIngredient.slice(1, newIngredient.length).toLowerCase(),
        ])
      : null;
    event.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          name="ingredient"
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. kasoori methi"
          /*
          value={ingredient}
          onChange={(input) => setIngredient(input.target.value)}
          */
          maxLength={50}
          autoFocus
          autoComplete="off"
        />
        <button /*onClick={addIngredient}*/>Add Ingredient</button>
      </form>
    </>
  );
}
