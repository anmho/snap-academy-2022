import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Navbar from "./components/Navbar.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer.js";
import Menu from "./pages/Menu.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar
          pages={["Home", "About", "Menu"]}
          urls={["/", "/about", "/menu"]}
          brandName={"TENKATORI USA"}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
