import React from "react";
import "./App.css";
import {
  Home,
  Header,
  About,
  Education,
  Contact,
  Work,
} from "./components/common";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Work />
      <Contact />
    </>
  );
}

export default App;
