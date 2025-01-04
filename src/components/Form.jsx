import React, { useState } from "react";
import "../App.css";
import Ingredients from "./Ingredients";

export default function Form(props) {
  // const [ingredient, setIngredient] = useState("");
  const addIngredient = (formData) => {
    /*// event.preventDefault();
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
    // const formData = new FormData(event.currentTarget);
    // console.log(newIngredient);
    // event.currentTarget.reset();
    // ======================= */

    // action does all the above logic
    const newIngredient = formData.get("ingredient");
    newIngredient != ""
      ? props.updatedList((prevVal) => [
          ...prevVal,
          newIngredient.split("")[0].toUpperCase() +
            newIngredient.slice(1, newIngredient.length).toLowerCase(),
        ])
      : null;
  };

  return (
    <>
      <form action={addIngredient} className="add-ingredient-form">
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
