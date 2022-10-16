import React from "react";
import "./About.css";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DiscreteSlider from "./SkillBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <>
      <section id="about">
        <h5>ABOUT</h5>

        <div className="row main">
          <h2>Welcome</h2>
          <img className="selfImg" src="/images/self.png" alt="self" />
          <p className="selfDis">
            I am a Computer Science student at Wichita State University in
            Kansas.
          </p>

          <div className="gridContainer">
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <Item>
                  <h3>Personal</h3>
                  <p></p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <h3>Skills</h3>
                  <DiscreteSlider />
                </Item>
              </Grid>
            </Grid>
          </div>

          <div className="pdf">
            <a
              href="files/resume.pdf"
              title="Download CV"
              class="button button-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
