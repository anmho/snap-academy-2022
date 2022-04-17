import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useRef } from "react";

function Navbar({ pages, urls, brandName }) {
  const linksRef = useRef();

  const onHamburgerClicked = (e) => {
    linksRef.current.classList.toggle("active");
  };

  const renderLink = (page, i) => {
    return (
      <Link key={i} className="navbar-link" to={urls[i]}>
        {page}
      </Link>
    );
  };

  return (
    <nav className="navigation-bar">
      <div className="brand-title">{brandName}</div>

      <button className="toggle-button" onClick={(e) => onHamburgerClicked(e)}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div ref={linksRef} className="navbar-links">
        {pages.map((page, i) => renderLink(page, i))}
      </div>
    </nav>
  );
}

export default Navbar;
