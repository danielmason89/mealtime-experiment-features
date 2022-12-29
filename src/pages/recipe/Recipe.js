import { RecipeStyle } from "./RecipeStyles";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const { mode } = useTheme();

  return (
    <div>
      <RecipeStyle>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {recipe && (
          <>
            <h2 className="page-title">{recipe.title}</h2>
            <p>Cook Time: {recipe.cookingTime}</p>
            <ul>
              {recipe.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
            <p className="method">{recipe.method}</p>
          </>
        )}
      </RecipeStyle>
    </div>
  );
}
