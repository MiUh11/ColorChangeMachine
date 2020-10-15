import React from "react";

export default function Box1({ boxDimension }) {
  return (
    <div className="box" style={{ width: boxDimension, height: boxDimension }}>
      <div>
        <h1>Where does it come from?</h1>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </p>
      </div>
    </div>
  );
}
