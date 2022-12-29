import { StyledNavbar } from "./NavbarStyles";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/Searchbar";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div>
      <StyledNavbar style={{ background: color }}>
        <Link to="/" className="brand">
          <h1>MealTime Experimental Features</h1>
        </Link>
        <SearchBar />
        <Link to="/create" className="bounce child">
          Create Meal
        </Link>
      </StyledNavbar>
    </div>
  );
}
