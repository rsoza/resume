import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <a href="#home" className="navbar-item">
        Home
      </a>
      |
      <a href="#about" className="navbar-item">
        About
      </a>
      |
      <a href="#experience" className="navbar-item">
        Experience
      </a>
      |
      <a href="#portfolio" className="navbar-item">
        Projects
      </a>
      |
      <a href="#contact" className="navbar-item">
        Contact
      </a>
    </section>
  );
}

export default Navbar;
