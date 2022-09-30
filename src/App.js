import "./App.css";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import lenovo from "./lenovo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Scroll down</p>
            <img alt="workComp" clasName="computer" src={lenovo}  />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <p>JK</p>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
}

export default App;
