import React from "react";
import WorkTimeline from "./Timeline";
import { Button } from "@mui/material";
import "./Work.css";

export default function Work() {
  return (
    <>
      <section id="work">
        <h5>EXPERIENCE</h5>

        <div className="row experience">
          <h2 className="exp">Work Timeline</h2>
          <p className="creds">Read down the line to view my journey.</p>
          <WorkTimeline />
          <br />
          <br />
          <h2 className="exp">Education</h2>
          <div className="row school">
            <div className="college">
              <Button href="/files/WSU-unofficial.pdf">
                <h4 className="col">WSU Transcript</h4>
              </Button>
              <p>
                Wichita State University
                <br />
                B.S. IN COMPUTER SCIENCE
                <br /> GPA: 3.6 | Expected May 2023
                <br />
              </p>
            </div>
            <div className="college">
              <Button href="/files/PBS-Degree.pdf">
                <h4 className="col">PBSC Degree</h4>
              </Button>
              <p>
                Palm Beach State College
                <br />
                A.A. GENERAL
                <br /> GPA: 3.8 | Graduated May 2014
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
