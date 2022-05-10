import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}° |`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return ` ${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  console.log('debuggg forecast day')
  console.log(props.data);

  return (
      <div className="">
        <div className="forecast-day fw-bold mb-2">{day()}</div>
        <Icon icon={props.data.weather[0].icon} />
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">{maxTemperature()}</span>
          <span className="forecast-temperature-min">{minTemperature()}</span>
        </div>
      </div>
      /* <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">{day()}</div>
        <Icon icon={props.data.weather[0].icon} />{" "}
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">{maxTemperature()}</span>
          <span className="forecast-temperature-min">{minTemperature()}</span>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">{day()}</div>
        <Icon icon={props.data.weather[0].icon} />{" "}
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">{maxTemperature()}</span>
          <span className="forecast-temperature-min">{minTemperature()}</span>
        </div>{" "}
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">{day()}</div>
        <Icon icon={props.data.weather[0].icon} />{" "}
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">{maxTemperature()}</span>
          <span className="forecast-temperature-min">{minTemperature()}</span>
        </div>{" "}
      </div>
      <div className="col-sm-2">
        <div className="forecast-day fw-bold mb-2">{day()}</div>
        <Icon icon={props.data.weather[0].icon} />{" "}
        <div className="forecast-temperature mt-2">
          <span className="forecast-temperature-max">{maxTemperature()}</span>
          <span className="forecast-temperature-min">{minTemperature()}</span>
        </div>{" "}
      </div> */

  );
}
