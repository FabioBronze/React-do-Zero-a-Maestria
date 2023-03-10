import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
