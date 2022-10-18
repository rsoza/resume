import React from "react";
import "./Projects.css";
import NasaCard from "./cards/NasaCard";
import ChecklistCard from "./cards/ChecklistCard";

function Projects() {
  return (
    <>
      <section id="portfolio">
        <div className="row project">
          <h5>Projects</h5>
          <h2>My creations</h2>
          <h6>This page is a work in progress.</h6>
          <p className="cards">
            <NasaCard />
            <ChecklistCard />
          </p>
        </div>
      </section>
    </>
  );
}

export default Projects;
