import React from "react";

export default function ShowTemperature(props) {

  return (
    <div className="ShowTemperature">
      <span className="temperature">
        <div className="number-grade fs-2 fw-bold">
          {Math.round(props.celsius)}
          <span className="unit text-start fw-normal fw-small">
            °C
          </span>
        </div>
      </span>
    </div>
  );
}
