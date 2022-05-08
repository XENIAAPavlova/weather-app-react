import React from "react";
import Icon from "./Icon";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleApiResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "9a6f70e2dcf8c5ad379723398a51a240";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleApiResponse);

  return (
    <div className="row mt-5 mb-2 justify-content-center">
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">Fri</div>
        <Icon icon={props.icon} />
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">14° | </span>
          <span className="forecast-temperature-min">8°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">Sat</div>
        <Icon icon={props.icon} />
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">12° | </span>
          <span className="forecast-temperature-min">7°</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">Sun</div>
        <Icon icon={props.icon} />
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">15° | </span>
          <span className="forecast-temperature-min">10°</span>
        </div>{" "}
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">Mon</div>
        <Icon icon={props.icon} />
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">18° | </span>
          <span className="forecast-temperature-min">10°</span>
        </div>{" "}
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">Tue</div>
        <Icon icon={props.icon} />
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">19° | </span>
          <span className="forecast-temperature-min">12°</span>
        </div>{" "}
      </div>
    </div>
  );
}
