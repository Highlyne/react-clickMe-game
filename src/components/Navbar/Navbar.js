import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar fixed-top navbar-dark bg-primary">
    <a className="navbar-brand" href="/">Puppy Click</a>
    <span class="navbar-text">
          <a className="nav-link" href="/">Click A Picture To Begin</a>
        </span>
        <ul className="navbar-nav">
        <li className="nav-item">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
  </nav>
);

export default Navbar;