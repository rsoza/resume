import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="main">
        <section id="about">
          <h5>ABOUT</h5>
        </section>
        <h2 className="intro">Welcome</h2>
        <p>
          <div className="welcome">
            <img className="selfImg" src="/images/self.jpg" alt="self" />
            <div className="welcomeParagraph">
              I am a Computer Science student at Wichita State University in
              Kansas. This website is inspired by my hobbies and experiences to
              show what I stand for.
            </div>
          </div>
        </p>
        <div className="currently">
          <h3>Currently</h3>
        </div>
      </div>
    </>
  );
}
