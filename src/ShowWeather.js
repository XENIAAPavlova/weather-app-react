import React from "react";
import Icon from "./Icon";
import CurrentDate from "./CurrentDate";
import ShowTemperature from "./ShowTemperature";

export default function ShowWeather(props) {
  if (props.temperature === null) {
    return null;
  }

  return (
    <div className="weather-details">
      <div className="row weather-header align-items-center main-current-weather">
        <div className="col-8 mt-5 mb-3 city-temp text-center">
          <div className="city-name fs-1 fw-normal">{props.city}</div>
          <ShowTemperature celsius={props.temperature} />
        </div>
        <div className="col-4 mt-4 mb-2 weather-icon text-start">
          <Icon icon={props.icon} size={80} color={"#4E944F"} />
        </div>
      </div>
      <div className="text-center mt-4 summary-current-weather">
        <div className="row text-center detailed-description">
          <div className="col-sm-6 current-time">
            <CurrentDate date={props.currentDate} />
          </div>
          <div className="col-sm-6 weather-humidity">
            Humidity: {props.humidity} %
          </div>
        </div>
        <div className="row text-center mb-5 detailed-description">
          <div className="col-sm-6 weather-summary text-capitalize">
            {props.description}
          </div>
          <div className="col-sm-6 current-time">Wind: {props.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
