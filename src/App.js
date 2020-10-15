import React, { useReducer } from "react";
import "./App.css";

import { useWindowSize } from "react-use";
import classNames from "classnames";

import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

const THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
  RED: "RED",
  GREEN: "GREEN",
  BLUE: "BLUE",
};

const DEFAULT_THEME = {
  key: THEMES.LIGHT,
};
const reducer = (currentState, action) => {
  console.log("reducer currentState", currentState);
  console.log("reducer action", action);
  return { key: action.nextTheme };
};

export default function App() {
  const [currentState, dispatch] = useReducer(reducer, DEFAULT_THEME);

  const { width, height } = useWindowSize();

  console.log("App currentState", currentState);
  console.log("width", width);
  console.log("height", height);

  const boxDimension = width / 4;

  return (
    <div
      id="container"
      className={classNames({
        "application-light": currentState.key === THEMES.LIGHT,
        "application-dark": currentState.key === THEMES.DARK,
        "application-red": currentState.key === THEMES.RED,
        "application-green": currentState.key === THEMES.GREEN,
        "application-blue": currentState.key === THEMES.BLUE,
      })}
    >
      <h1>Color Changing Machine</h1>
      <div className="boxes-wrapper">
        <Box1 boxDimension={boxDimension} />
        <Box2 boxDimension={boxDimension} />
        <Box3 boxDimension={boxDimension} />
      </div>
      <div className="buttons">
        <button
          className="default-button"
          onClick={() => dispatch({ nextTheme: THEMES.LIGHT })}
        >
          Default
        </button>
        <button
          className="dark-button"
          onClick={() => dispatch({ nextTheme: THEMES.DARK })}
        >
          Dark
        </button>
        <button
          className="red-button"
          onClick={() => dispatch({ nextTheme: THEMES.RED })}
        >
          Red
        </button>
        <button
          className="green-button"
          onClick={() => dispatch({ nextTheme: THEMES.GREEN })}
        >
          Green
        </button>
        <button
          className="blue-button"
          onClick={() => dispatch({ nextTheme: THEMES.BLUE })}
        >
          Blue
        </button>
      </div>
    </div>
  );
}
