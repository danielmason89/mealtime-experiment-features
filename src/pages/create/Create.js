import { CreateStyle } from "./CreateStyles";
import { useRef, useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div>
      <CreateStyle>
        <h2 className="page-title">Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe Title:</span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients">
              <input
                type="text"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              <button className="btn" onClick={handleAdd}>
                add
              </button>
            </div>
          </label>
          <p>
            Current Ingredient:{" "}
            {ingredients.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>
          <label>
            <span>Recipe Method:</span>
            <textarea
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>
          <label>
            <span>Cooking time (minutes):</span>
            <input
              type="number"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>
          <button className="btn">Submit</button>
        </form>
      </CreateStyle>
    </div>
  );
}
