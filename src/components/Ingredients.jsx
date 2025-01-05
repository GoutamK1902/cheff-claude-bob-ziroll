import React, { useState } from "react";
import "../App.css";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Ingredients(props) {
  const realTimeIngredients = props.ingredientsList;

  return (
    realTimeIngredients.length > 0 && (
      <>
        <section className="ingredient-section">
          <h2>Ingredients on hand:</h2>
          <ul>
            {realTimeIngredients.map((item, index) => (
              <li key={index} id={"item " + index}>
                {item}
              </li>
            ))}
          </ul>
          {realTimeIngredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </section>
        {props.toShowRecipe && <ClaudeRecipe />}
      </>
    )
  );
}
