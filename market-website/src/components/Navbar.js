import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useRef } from "react";

function Navbar() {
  const linksRef = useRef();

  const onHamburgerClicked = (e) => {
    linksRef.current.classList.toggle("active");
  };

  return (
    <nav className="navigation-bar">
      <div className="brand-title">Brand Name</div>

      <button className="toggle-button" onClick={(e) => onHamburgerClicked(e)}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div ref={linksRef} className="navbar-links">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
