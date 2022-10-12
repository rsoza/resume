import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollDown from "./ScrollDown";

export default function ParalaxToMain() {
  return (
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
        offset={0.5}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontStyle: "italic",
        }}
      >
        <h1 alignItems="left">
          Hello, <br />
        </h1>
      </ParallaxLayer>
    </Parallax>
  );
}
