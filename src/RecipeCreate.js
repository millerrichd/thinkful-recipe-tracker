import React, { useState } from "react";

function RecipeCreate({handleCreateRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //Initial value of the formData
  const initialFormData = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation"
  };

  //setting useState to the initial values of the FormData
  const [formData, setFormData] = useState({...initialFormData})

  // responsible for keeping the formData updated as the user types in any field.
  const handleFormUpdate = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  //Calls teh hundleCreateRecipe function passed in and then clears the data
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleCreateRecipe(formData);
    setFormData({...initialFormData});
  }

  // Everything updates via handleFormUpdate and displaces its data via the value formData.field
  return (
    <form name="create" onSubmit={handleOnSubmit}>
      <table>
        <tbody>
          <tr className="highlight-color">
            <td className="short-width">
              <input id="name" type="text" name="name" onChange={handleFormUpdate} value={formData.name}/>
            </td>
            <td className="short-width">
              <input id="cuisine" type="text" name="cuisine" onChange={handleFormUpdate} value={formData.cuisine}/>
            </td>
            <td className="short-width">
              <input id="photo" type="url" name="photo" onChange={handleFormUpdate} value={formData.photo}/>
            </td>
            <td className="long-width">
              <textarea id="ingredients" name="ingredients" onChange={handleFormUpdate} value={formData.ingredients}/>
            </td>
            <td className="long-width">
              <textarea id="preparation" name="preparation" onChange={handleFormUpdate} value={formData.preparation}/>
            </td>
            <td className="short-width">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
