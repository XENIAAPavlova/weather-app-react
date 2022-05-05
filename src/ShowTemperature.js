import React from "react";

export default function ShowTemperature(props) {
  return (
    <div className="ShowTemperature">
      <h3>{Math.round(props.temperature)} °C | °F </h3>
    </div>
  );
}
