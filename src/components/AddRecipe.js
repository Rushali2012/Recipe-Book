import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRecipe.css";

const AddRecipe = ({ addRecipe, editRecipe }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editRecipe) {
      setTitle(editRecipe.title);
    setDescription(editRecipe.description);
    setIngredients(editRecipe.ingredients.join("\n"));
  setSteps(editRecipe.steps.join("\n"));
setImage(editRecipe.image);
    }
  }, [editRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title || !description || !ingredients || !steps || !image) {
      setError("All fields are required.");
      return;
    }

    const newRecipe = {
    title,
  description,
  ingredients: ingredients.split("\n"),
    steps: steps.split("\n"),
        image,
    };

    addRecipe(newRecipe);
    navigate("/"); 
  };

  return (
    <div className="add-recipe-form">
      <h2>{editRecipe ? "Edit Recipe" : "Add New Recipe"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
        type="text"
          value={title}
        onChange={(e) => setTitle(e.target.value)}
      required
          />
        </div>

    <div>
    <label>Description:</label>
    <textarea
         value={description}
    onChange={(e) => setDescription(e.target.value)}
      />
    </div>

        <div>
          <label>Ingredients (one per line):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Preparation Steps (one per line):</label>
          <textarea
      value={steps}
          onChange={(e) => setSteps(e.target.value)}
      required
          />
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit">{editRecipe ? "Update Recipe" : "Add Recipe"}</button>
      </form>
    </div>
  );
};

export default AddRecipe;
