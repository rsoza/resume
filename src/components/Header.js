import React from "react";
import "./Styles.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <button class="button">
            <a class="smoothscroll" href="#home">
              HOME
            </a>
          </button>
          <button class="button">
            <a class="smoothscroll" href="#about">
              ABOUT
            </a>
          </button>
          <button class="button">
            <a class="smoothscroll" href="#resume">
              RESUME
            </a>
          </button>
          <button class="button">
            <a class="smoothscroll" href="#portfolio">
              PROJECTS
            </a>
          </button>
        </div>
      </div>
      <section id="home">
        <img src="/gam.jpg" alt="gam" />
      </section>
    </>
  );
}
