import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { StyledRecipeList } from "./RecipeListStyles";
import Trashcan from "../../assets/delete-trashcan.svg";
import { projectFirestore } from "../../firebase/config";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No Recipes Found</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <Link
          to={`/recipes/${recipe.id}`}
          key={recipe.id}
          className={`card ${mode} bounce2 child2`}
        >
          <h3>{recipe.title}</h3>
          <p> Cook Time: {recipe.cookingTime}</p>
          <img
            className="delete"
            onClick={() => handleClick(recipe.id)}
            src={Trashcan}
            alt="delete recipe"
          />
        </Link>
      ))}
    </StyledRecipeList>
  );
}
