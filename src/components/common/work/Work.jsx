import React from "react";
import WorkTimeline from "./Timeline";
import "./Work.css";

export default function Work() {
  return (
    <>
      <section id="work">
        <h5>EXPERIENCE</h5>

        <div className="row experience">
          <h2 className="exp">Work Timeline</h2>
          <p className="creds">This starts from oldest to latest </p>
          <WorkTimeline />
        </div>
      </section>
    </>
  );
}
