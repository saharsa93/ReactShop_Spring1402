import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tutorials">Tutorials</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
