import { RecipeStyle } from "./RecipeStyles";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Recipe was not Found");
        }
      });
    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Something Completely different",
    });
  };

  return (
    <div>
      <RecipeStyle className={`{mode}`}>
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
            <button onClick={handleClick}>Update Recipe</button>
          </>
        )}
      </RecipeStyle>
    </div>
  );
}
