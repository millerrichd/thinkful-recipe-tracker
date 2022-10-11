import React from "react";

// function just returns a row on the recipe item, with the delete button mapped tothe handleDeleteRecipe function passed in.
function RecipeItem({recipe, handleDeleteRecipe}) {
  return (
    <tr className="highlight-color">
      <td className="short-width">{recipe.name}</td>
      <td className="short-width">{recipe.cuisine}</td>
      <td className="short-width"><img src={recipe.photo} alt=""/></td>
      <td className="content_td long-width"><p>{recipe.ingredients}</p></td>
      <td className="content_td long-width"><p>{recipe.preparation}</p></td>
      <td className="short-width"><button name="delete" onClick={handleDeleteRecipe}>Delete</button></td>
    </tr>
  );
}

export default RecipeItem