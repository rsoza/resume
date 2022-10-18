import React from "react";
import "./Home.css";
import { IconButton } from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import PhotoIcon from "@mui/icons-material/Photo";
import Tooltip from "@mui/material/Tooltip";

export default function About() {
  return (
    <>
      <div className="home-block">
        <section id="home">
          <div className="photo">
            <Tooltip title="Photo taken by me" placement="right" arrow>
              <PhotoIcon
                sx={{
                  "&:hover": { color: "#8AB39F" },
                  color: "#F2E6CE",
                  fontSize: 25,
                }}
              />
            </Tooltip>
          </div>
          <div className="noshow">
            <h5>HOME</h5>
          </div>
        </section>
        <div className="intro">
          <h1> Rebecca Soza</h1>
          <span className="fire"> Computer Science | Student </span>
        </div>
        <div className="arrow">
          <a href="#about" className="navbar-item">
            <IconButton aria-label="downArrow">
              <Tooltip title="Click me" placement="top" arrow>
                <ArrowDropDownCircleIcon
                  sx={{
                    "&:hover": { color: "#8AB39F" },
                    color: "#F2E6CE",
                    fontSize: 46,
                  }}
                />
              </Tooltip>
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
}
