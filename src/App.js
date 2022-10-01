import "./App.css";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollDown from "./components/ScrollDown";
import * as Lenovo from "./images/lenovo.png";
import * as Table from "./images/table.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollDown />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#836543" }}
          />
            <ParallaxLayer
              offset={1.25}
              speed={0.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontStyle: "italic",
              }}
            >
              <img src={Table} alt="Table" />
            </ParallaxLayer>
            
          <ParallaxLayer
            offset={1.25}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontStyle: "italic",
            }}
          >
            <h1 alignItems="left">Hello, <br />my name is Rebecca Soza</h1>
            <br /><img src={Lenovo} alt="Lenovo" />
          </ParallaxLayer>
          
        </Parallax>

      </header>
    </div>
  );
}

export default App;
