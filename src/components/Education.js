import "./Styles.css";
import React from "react";

export default function Education() {
  return (
    <>
      <section id="education">
        <h5>EDUCATION</h5>
      </section>
      <div class="school">
        <img class="resize" src="/images/PBSC.png" alt="PBSC" />
        <img class="resize" src="/images/WSU.png" alt="WSU" />
      </div>
      <body>
        WICHITA STATE UNIVERSITY B.S. IN COMPUTER SCIENCE GPA: 3.6 | Expected
        May 2023
        <br />
        PALM BEACH STATE COLLEGE A.A. GENERAL GPA: 3.8 | Graduated May 2014
      </body>
    </>
  );
}
