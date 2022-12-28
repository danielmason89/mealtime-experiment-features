import { StyledNavbar } from "./NavbarStyles";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/Searchbar";

export default function Navbar() {
  return (
    <div>
      <StyledNavbar>
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
