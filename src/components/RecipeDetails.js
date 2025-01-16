import React from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams(); 
  const recipe = recipes.find((r) => r.id === parseInt(id)); 

  if (!recipe) {
    return <div>Recipe doesn't exist!</div>; 
  }

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
      <div className="recipe-content">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Preparation Steps:</h3>
        <ul>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
