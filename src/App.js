import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Navbar from "./components/Navbar.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar
          pages={["Home", "About"]}
          urls={["/", "/about"]}
          brandName={"Tenkatori"}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
