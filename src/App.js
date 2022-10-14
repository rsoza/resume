import "./App.css";
import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Education from "./components/Education";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Education />
      <Work />
      <Contact />
    </>
  );
}

export default App;
