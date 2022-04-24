import React from "react";
import Icon from "./Icon";

export default function ShowTemperature(props) {
  if (props.temperature === null) {
    return null;
  }

  return (
    <div className="weather-details">
      <div className="detailed-current-weather">
        <div className="row text-start">
          <div className="col-sm-6 current-time">Thursday 16:24</div>
          <div className="col-sm-6 weather-humidity">Humidity: 65 %</div>
        </div>
        <div className="row text-start mb-5">
          <div className="col-sm-6 weather-summary text-capitalize">Clouds</div>
          <div className="col-sm-6 current-time">Wind: 14 km/h</div>
        </div>
      </div>
      <div className="row weather-header align-items-center">
        <div className="col city-temp text-center">
          <h1>Berlin </h1>
          <h3> 13 °C </h3>
        </div>
        <div className="col-4 mb-2 weather-icon text-start">
          <Icon />
        </div>
      </div>

      <div class="row mt-5 mb-2 justify-content-center">
        <div class="col-sm-2">
          <div class="forecast-day">Fri</div>
          <Icon type="sunny" />
          <div class="forecast-temperature">14°</div>
        </div>
        <div class="col-sm-2">
          <div class="forecast-day">Sat</div>
          <Icon type="foggy" />
          <div class="forecast-temperature">14°</div>
        </div>
        <div class="col-sm-2">
          <div class="forecast-day">Sun</div>
          <Icon type="rainy" />
          <div class="forecast-temperature">8°</div>
        </div>
        <div class="col-sm-2">
          <div class="forecast-day">Mon</div>
          <Icon type="rainy" />
          <div class="forecast-temperature">7°</div>
        </div>
        <div class="col-sm-2">
          <div class="forecast-day">Tue</div>
          <Icon type="sunny" />
          <div class="forecast-temperature">11°</div>
        </div>
      </div>
    </div>
  );
}
