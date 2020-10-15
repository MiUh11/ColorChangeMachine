import React from "react";

export default function Box({ boxDimension }) {
  return (
    <div
      className="box"
      style={{ width: boxDimension, height: boxDimension }}
    ></div>
  );
}
