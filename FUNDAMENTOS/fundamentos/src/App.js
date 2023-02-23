// Components
import FirstComponent from "./components/FirstComponent.jsx";
import TemplateExpressions from "./components/TemplateExpressions.jsx";
import Events from "./components/Events";
import Challenge from "./components/Challenge.jsx";

// Styles
import "./App.css";
import MyComponent from "./components/MyComponent.jsx";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
