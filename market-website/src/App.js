import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={["/", "/home"]} element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
