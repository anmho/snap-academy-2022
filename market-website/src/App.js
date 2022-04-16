import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Navbar from "./components/Navbar.js";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar titles={["Home, About"]} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <div className="Contact">Contact</div>
        <div>Footer</div>
      </Router>
    </div>
  );
}

export default App;
