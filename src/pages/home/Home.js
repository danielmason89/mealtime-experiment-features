import RecipeList from "../../components/recipelist/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import { HomeStyle } from "./HomeStyles";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div>
      <HomeStyle>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </HomeStyle>
    </div>
  );
}
