import "./App.css";
import Header from "./components/Header.jsx";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-bgColor">
      <Header />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
