import React from "react";

const handlePBSC = (event) => {
  console.log(event.currentTarget);

  console.log("div clicked");
};

export default function Education() {
  return <div onclick={handlePBSC}>PBSC</div>;
}
