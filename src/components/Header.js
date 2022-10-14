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
          |
          <button class="button">
            <a class="smoothscroll" href="#about">
              ABOUT
            </a>
          </button>
          |
          <button class="button">
            <a class="smoothscroll" href="#work">
              EXPERIENCE
            </a>
          </button>
          |
          <button class="button">
            <a class="smoothscroll" href="#portfolio">
              PROJECTS
            </a>
          </button>
          |
          <button class="button">
            <a class="smoothscroll" href="#contact">
              CONTACT
            </a>
          </button>
        </div>
      </div>
      <div className="intro">
        <section id="home">
          <h1>Rebecca Soza</h1>
        </section>
      </div>
    </>
  );
}
