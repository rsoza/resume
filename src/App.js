import React from "react";
import "./App.css";
import {
  Home,
  Header,
  About,
  Work,
  Projects,
  Contact,
} from "./components/common";

function App() {
  return (
    <>
      <Home />
      <Header />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
