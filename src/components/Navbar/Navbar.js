import React from "react";
import "./Navbar.css";

const Navbar = () => (
<nav class="navbar fixed-top navbar-dark bg-primary">
  <ul class="navbar-nav">
      <li class="nav-item">
      <a class="navbar-brand" href="#">Puppy Click</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Click A Picture To Begin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Score: 0 | Top Score: 0 </a>
      </li>
    </ul>
</nav>

);

export default Navbar;