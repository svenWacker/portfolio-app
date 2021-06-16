import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar">
      {/* <ul className="nav-links"> */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>Home</li>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <li>About</li>
      </Link>
      <Link to="/skills" style={{ textDecoration: "none" }}>
        <li>Skills</li>
      </Link>
      <Link to="/project" style={{ textDecoration: "none" }}>
        <li>Works</li>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <li>Contact</li>
      </Link>
      {/* </ul> */}
    </nav>
  );
};

export default Menu;
