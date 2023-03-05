import "./App.css";
// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import More from "./pages/Products";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
