import React from "react";
import "./Styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1>Resume</h1>
        <button className="about">about</button>
        <button className="education">education</button>
        <button className="work">work</button>
      </div>
    </div>
  );
}
