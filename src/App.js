import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([
    
    {
      id: 1,
      title: "Vegetable Biryani",
      description: "A fragrant and flavorful rice dish made with mixed vegetables and aromatic spices.",
      ingredients: [
        "1 cup mixed vegetables (carrots, peas, beans, etc.)",
        "1 cup rice",
        "2 tbsp ghee or oil",
        "1 tsp cumin seeds",
        "1 bay leaf",
        "1 cinnamon stick",
        "1 star anise",
        "1 tsp garam masala",
        "Salt to taste",
        "2 cups water",
      ],
      steps: [
        "Heat ghee or oil in a pan, add cumin seeds, bay leaf, cinnamon, and star anise.",
        "Add mixed vegetables and sauté for 5 minutes.",
        "Add rice, garam masala, salt, and water. Bring it to a boil.",
        "Reduce the heat, cover, and cook for 15-20 minutes until rice is done.",
      ],
      image: "https://th.bing.com/th/id/OIP.Bmui8r3XxTzNbohdpsrioAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 2,
      title: "Paneer Butter Masala",
      description: "A rich and creamy Indian dish made with paneer cubes cooked in a tomato-based gravy.",
      ingredients: [
        "200g paneer (Indian cottage cheese)",
        "1 cup onions, finely chopped",
        "1 cup tomatoes, pureed",
        "2 tbsp butter",
        "1 tsp ginger-garlic paste",
        "1 tsp garam masala",
        "1/2 cup heavy cream",
        "1 tbsp kasuri methi (dried fenugreek leaves)",
        "Salt to taste",
        "Fresh coriander for garnish",
      ],
      steps: [
        "Heat butter in a pan, add onions, and sauté until golden.",
        "Add ginger-garlic paste and sauté for 2 minutes.",
        "Add pureed tomatoes and cook until oil separates.",
        "Add garam masala, salt, and water, simmer for 10 minutes.",
        "Add cream and paneer cubes, cook for another 5 minutes.",
        "Garnish with kasuri methi and fresh coriander.",
      ],
      image: "https://www.bing.com/th?id=OIP.3fROpInSzgY--B1msdJITQHaHa&w=146&h=146&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 3,
      title: "Saffron Rice",
      description: "A simple yet flavorful rice dish infused with saffron and vegetable stock.",
      ingredients: [
        "1 cup mixed bell peppers, chopped",
        "1/2 cup peas",
        "1 cup rice",
        "1 tbsp olive oil",
        "1 tsp saffron threads",
        "1/2 cup vegetable stock",
        "1 tbsp paprika",
        "Salt to taste",
      ],
      steps: [
        "Heat olive oil in a large pan, add bell peppers, peas, and sauté for 5 minutes.",
        "Add rice and paprika, then pour in vegetable stock.",
        "Add saffron, salt, and cook for 15 minutes until rice is tender.",
      ],
      image: "https://th.bing.com/th/id/OIP.7hpirWpPcBn0ftbVNMWRXgHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 4,
      title: "Vegetable Lasagna",
      description: "Layers of pasta, ricotta cheese, and veggies baked to perfection in marinara sauce.",
      ingredients: [
        "Lasagna sheets",
        "2 cups mixed vegetables (zucchini, spinach, mushrooms)",
        "1 cup ricotta cheese",
        "1 cup marinara sauce",
        "2 cups shredded mozzarella cheese",
        "1/2 cup grated Parmesan cheese",
        "Salt and pepper to taste",
      ],
      steps: [
        "Preheat oven to 375°F (190°C). Boil the lasagna sheets until soft.",
        "Layer the lasagna with marinara sauce, vegetables, ricotta cheese, mozzarella, and Parmesan.",
        "Repeat layers and top with mozzarella cheese.",
        "Bake for 25-30 minutes or until cheese is golden and bubbly.",
      ],
      image: "https://www.bing.com/th?id=OIP.Y8--V2PDUywsjMIhYgJ7BgHaEK&w=146&h=120&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      id: 5,
      title: "Chana Masala",
      description: "A hearty and flavorful curry made with chickpeas and a blend of Indian spices.",
      ingredients: [
        "2 cups chickpeas, soaked overnight",
        "2 medium tomatoes, chopped",
        "1 onion, finely chopped",
        "1 tbsp ginger-garlic paste",
        "1 tbsp coriander powder",
        "1 tbsp cumin powder",
        "1 tbsp garam masala",
        "1 tsp turmeric powder",
        "Salt to taste",
        "Coriander leaves for garnish",
      ],
      steps: [
        "Soak chickpeas overnight and pressure cook for 20 minutes.",
        "In a pan, heat oil and sauté onions until golden.",
        "Add ginger-garlic paste, tomatoes, and cook until soft.",
        "Add spices, garam masala, and cooked chickpeas.",
        "Simmer for 10 minutes, adjust salt to taste, and garnish with coriander.",
      ],
      image: "https://th.bing.com/th?id=OSK.HEROP7rNRcPEnI0I6VonfaQEhJ9NDWqm_4JqKpy-ypFzI6Y&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM",
    },
    {
      id: 6,
      title: "Veggie Tacos",
      description: "A fresh and vibrant taco filled with sautéed veggies, black beans, and avocado.",
      ingredients: [
        "6 soft corn tortillas",
        "1 cup black beans, cooked",
        "1 cup mixed sautéed vegetables (bell peppers, onions, zucchini)",
        "1 avocado, sliced",
        "1/2 cup salsa",
        "1 tbsp lime juice",
        "Cilantro for garnish",
      ],
      steps: [
        "Warm the corn tortillas on a skillet.",
        "Fill each tortilla with black beans, sautéed vegetables, and avocado slices.",
        "Top with salsa, a squeeze of lime, and cilantro.",
      ],
      image: "https://www.bing.com/th?id=OIP.ymT-zNm7SoJPPs8wqy4FdAHaLH&w=146&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
]);


  const [searchTerm, setSearchTerm] = useState("");
  const [editRecipe, setEditRecipe] = useState(null);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const filteredRecipes = recipes.filter((recipe) => {
    const searchInTitle = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    
    return searchInTitle ;
  });

  const addRecipe = (newRecipe) => {
    if (userType === "host") {
      if (editRecipe) {
        setRecipes(
          recipes.map((recipe) =>
            recipe.id === editRecipe.id
              ? { ...newRecipe, id: editRecipe.id }
              : recipe
          )
        );
      } else {
        setRecipes((prevRecipes) => [
          ...prevRecipes,
          { ...newRecipe, id: prevRecipes.length + 1 },
        ]);
      }
      setEditRecipe(null);
      navigate("/");
    } else {
      alert("Only hosts can add recipes.");
    }
  };

  const handleEditClick = (recipe) => {
    if (userType === "host") {
      setEditRecipe(recipe);
      navigate("/add-recipe");
    } else {
      alert("Only hosts can edit recipes.");
    }
  };

  // const handleUserType = (type) => {
  //   setUserType(type);
  // };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Recipe Book</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-recipe">Add Recipe</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
      <Route 
  path="/" 
  element={
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <RecipeList recipes={filteredRecipes} onEdit={handleEditClick} userType={userType} />
      {userType === "host" && (
        <Link to="/add-recipe">
          <button>Add Recipe</button>
        </Link>
      )}
    </div>
  } 
/>
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipe addRecipe={addRecipe} editRecipe={editRecipe} userType={userType} />} />
        <Route path="/signin" element={<SignIn />} />
<Route path="/register" element={<Register />} />
<Route path="/add-recipe" element={<AddRecipe addRecipe={addRecipe} editRecipe={editRecipe} userType={userType} />} />
      </Routes>
    </div>
  );
}

export default App;