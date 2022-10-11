import React from "react";
import RecipeItem from "./RecipeItem"

function RecipeList({recipes, handleDeleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  //Createdd RecipeItem as the subcombonent for each row, passing it the recipe and the delete button with an index.
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="short-width">Name</th>
            <th className="short-width">Cuisine</th>
            <th className="short-width">Photo</th>
            <th className="long-width">Ingredients</th>
            <th className="long-width">Preparation</th>
            <th className="short-width">Actions</th>
          </tr>
        </thead>
        <tbody>
          { recipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} handleDeleteRecipe={() => handleDeleteRecipe(index)}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
