import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes, onEdit }) => {
  return (
    <div className="recipe-list">
      <h2>List of Recipes</h2>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-actions">
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                View Recipe
              </Link>
              <button onClick={() => onEdit(recipe)} className="edit-button">
                Edit Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
