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
import useWindowDimensions from "./components/WindowsDim";

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div id="root" sx={{ height: { height }, width: { width } }}></div>
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
