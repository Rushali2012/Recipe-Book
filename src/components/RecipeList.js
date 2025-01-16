import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes, onEdit, userType }) {
  return (
    <div className="recipe-list">
      <h2>List of Recipes</h2>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-link">
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="recipe-actions">
                {(userType === "host" ) && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onEdit(recipe);
                    }}
                    className="edit-button"
                  >
                    Edit Recipe
                  </button>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;