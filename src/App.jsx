import React, { useState } from "react";
import "./App.scss";

function App() {
  let [r, setR] = useState(0);
  let [g, setG] = useState(0);
  let [b, setB] = useState(0);
  let [opacity, setOpacity] = useState(1);
  let boxShadowColor = `rgb(${r},${g},${b})`;
  const rangeChanger = () => {
    setR(document.querySelector("#red").value);
    setG(document.querySelector("#green").value);
    setB(document.querySelector("#blue").value);
    setOpacity(document.querySelector("#opacity").value);
  };
  return (
    <div
      className="main-wrapper"
      style={{ boxShadow: `2px 2px 10px ${boxShadowColor}` }}
    >
      <div
        className="color-result"
        style={{
          backgroundColor: `rgba(${r},${g},${b},${opacity})`,
        }}
      ></div>
      <br />
      <small style={{ color: `rgb(${r},${g},${b})` }}>
        <b>
          rgba({r}, {g}, {b}, {opacity})
        </b>
      </small>
      <div className="color-changer">
        <form>
          <legend className="red">Red: {r}</legend>
          <input
            id="red"
            onChange={rangeChanger}
            type="range"
            min="0"
            max="250"
            value={r}
          />
          <legend className="green">Green: {g}</legend>
          <input
            id="green"
            onChange={rangeChanger}
            type="range"
            min="0"
            max="250"
            value={g}
          />
          <legend className="blue">Blue: {b}</legend>
          <input
            id="blue"
            onChange={rangeChanger}
            type="range"
            min="0"
            max="250"
            value={b}
          />
          <legend>Opacity: {opacity}</legend>
          <input
            style={{ border: "none", textAlign: "center" }}
            id="opacity"
            onChange={rangeChanger}
            type="number"
            min="0"
            max="1"
            value={opacity}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
