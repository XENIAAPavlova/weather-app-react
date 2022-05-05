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
          <h1>{props.city}</h1>
          <ShowTemperature />
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
      <div className="row mt-5 mb-2 justify-content-center">
        <div className="col-sm-2">
          <div className="forecast-day">Fri</div>
          <Icon icon={props.icon} size={52} />
          <div className="forecast-temperature">14°</div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Sat</div>
          <Icon icon={props.icon} />
          <div className="forecast-temperature">14°</div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Sun</div>
          <Icon icon={props.icon} />
          <div className="forecast-temperature">8°</div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Mon</div>
          <Icon icon={props.icon} />
          <div className="forecast-temperature">7°</div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Tue</div>
          <Icon icon={props.icon} />
          <div className="forecast-temperature">11°</div>
        </div>
      </div>
    </div>
  );
}
