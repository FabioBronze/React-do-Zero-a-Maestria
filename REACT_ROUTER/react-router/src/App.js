import "./App.css";
// 1 - Config React-Router -
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import SearchForms from "./components/SearchForms.jsx";

// Pages -
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Info from "./pages/Info.jsx";
import NotFound from "./pages/NotFound.jsx";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com React-Router */}
        <Navbar />
        {/*9 = Search*/}
        <SearchForms />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*4 - Rota Dinamica*/}
          <Route path="/products/:id" element={<Product />} />
          {/*6 - Nested Route*/}
          <Route path="/products/:id/info" element={<Info />} />
          {/*9 = Search*/}
          <Route path="/search" element={<Search />} />
          {/*10 - Redirect*/}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/*7 - No Match Route*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
