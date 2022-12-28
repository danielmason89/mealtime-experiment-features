import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSearchBar } from "./StyledSearchbar";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          placeholder="Search Recipes"
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </StyledSearchBar>
  );
}
