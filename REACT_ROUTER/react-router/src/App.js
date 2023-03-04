import "./App.css";
// 1 - Config React-Router -
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages -
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
