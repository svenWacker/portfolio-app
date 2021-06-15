import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/skills">
        <li>Skills</li>
      </Link>
      <Link to="/project">
        <li>Works</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </nav>
  );
};

export default Menu;
