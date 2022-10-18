import React from "react";
import "./Home.css";
import { IconButton, Button } from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import PhotoIcon from "@mui/icons-material/Photo";

export default function About() {
  const showCredit = () => {
    alert("me");
  };
  return (
    <>
      <div className="home-block">
        <section id="home">
          <div className="photo">
            <Button onClick={showCredit}>
              <PhotoIcon
                sx={{
                  "&:hover": { color: "#8AB39F" },
                  color: "#F2E6CE",
                  fontSize: 25,
                }}
              />
            </Button>
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
              <ArrowDropDownCircleIcon
                sx={{
                  "&:hover": { color: "#8AB39F" },
                  color: "#F2E6CE",
                  fontSize: 46,
                }}
              />
            </IconButton>
          </a>
        </div>
      </div>
    </>
  );
}
