import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="/redirect" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
