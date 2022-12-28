import { Link } from "react-router-dom";
import { StyledRecipeList } from "./RecipeListStyles";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No Recipes Found</div>;
  }

  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <Link
          to={`/recipes/${recipe.id}`}
          key={recipe.id}
          className="card bounce2 child2"
        >
          <h3>{recipe.title}</h3>
          <p> Cook Time: {recipe.cookingTime}</p>
        </Link>
      ))}
    </StyledRecipeList>
  );
}
