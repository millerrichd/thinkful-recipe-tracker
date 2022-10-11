import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  // Simple handle create that appends the new recipe to the existing recipes.
  const handleCreateRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  }

  // Delete method that filters on indexToDelete not matching index and returns the filter to be set as the current recipes.
  const handleDeleteRecipe = (indexToDelete) => {
    setRecipes((current) => current.filter((recipe, index) => index !== indexToDelete));
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate handleCreateRecipe={handleCreateRecipe} />
    </div>
  );
}

export default App;
