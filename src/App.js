import "./App.css";
import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Education from "./components/Education";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Education />
      <Contact />
    </>
  );
}

export default App;
