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
            My name is Rebecca Soza and I am pursuing a B.S. in Computer Science
            at Wichita State University. Although most of my skills are in web
            development, my primary interest is Software Development. This
            junior year I am focusing on strengthening my skills in python and
            learning Go language.
          </p>

          <div className="gridContainer">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Item>
                  <h3>Hobbies</h3>
                  <h6>
                    The more you practice, the better you get, the more freedom
                    you have to create. -Jocko Willink
                  </h6>
                  <div className="h7">
                    I believe in always developing not only your mind, but also
                    your body. My hobbies are weight training, photography and
                    potery.
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <h3>Skills</h3>
                  <DiscreteSlider />
                  <h6>I am also Bilingual: Spanish and English</h6>
                </Item>
              </Grid>
            </Grid>
          </div>

          <div className="pdf">
            <a
              href="files/resume.pdf"
              title="Download CV"
              className="button button-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
