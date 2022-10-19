import React from "react";
import "./App.css";
import {
  Home,
  Header,
  About,
  Projects,
  Contact,
  Experience,
} from "./components/common";

function App() {
  return (
    <>
      <div id="root"></div>
      <Home />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
