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
      <a href="#work" className="navbar-item">
        Experience
      </a>
      |
      <a href="#school" className="navbar-item">
        Education
      </a>
      |
      <a href="#contact" className="navbar-item">
        Contact
      </a>
    </section>
  );
}

export default Navbar;
