import React, { useState } from "react";

export default function ShowTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="ShowTemperature">
        <span className="temperature">
          <h3>{Math.round(props.celsius)}</h3>
          <span className="unit text-center fs-4">
            °C|
            <a
              style={{ textDecoration: "none" }}
              href="/"
              onClick={showFahrenheit}
            >
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="ShowTemperature">
        <span className="temperature">
          <h3>{Math.round(fahrenheit())}</h3>
          <span className="unit text-center fs-4">
            <a
              style={{ textDecoration: "none" }}
              href="/"
              onClick={showCelsius}
            >
              °C
            </a>
            |°F
          </span>
        </span>
      </div>
    );
  }
}
