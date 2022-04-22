import React from "react";

export default function ShowTemperature(props) {
  if (props.temperature === null) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>{props.city}</strong>
      </li>
      <li>Temperature: {Math.round(props.temperature)}</li>
      <li>Description: {props.description}</li>
      <li>Humidity: {props.humidity}%</li>
      <li>Wind: {Math.round(props.wind)} km/h</li>
    </ul>
  );
}
