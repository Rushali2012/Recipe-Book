import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddRecipe.css";

function AddRecipe({ onAdd, userType }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, image });
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="add-recipe">
      { userType === "host" ? (
        <form onSubmit={handleSubmit}>
          <h2>Add Recipe</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
          <button type="submit">Add Recipe</button>
        </form>
      ) : (
        <p>You need to sign in to add a recipe.</p>
      )}
    </div>
  );
}

export default AddRecipe;