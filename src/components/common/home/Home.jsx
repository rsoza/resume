import React from "react";
import "./Home.css";
import { IconButton } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export default function About() {
  return (
    <>
      <div className="home-block">
        <section id="home">
          <div className="noshow">
            <h5>HOME</h5>
          </div>
        </section>
        <div className="intro">
          <h1> Rebecca Soza</h1>
          <span className="fire"> Computer Science </span>
          <span> | </span>
          <span className="fire"> Student </span>
        </div>
        <div className="arrow">
          <a href="#about" className="navbar-item">
            <IconButton aria-label="downArrow" sx={{}}>
              <ArrowCircleDownIcon
                sx={{
                  "&:hover": { color: "#a2a997" },
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
}
