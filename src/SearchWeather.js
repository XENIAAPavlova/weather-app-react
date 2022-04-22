import React, { useState } from "react";
import axios from "axios";
import ShowTemperature from "./ShowTemperature";

export default function SearchWeather(props) {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcfba56f795371b9b39f70882499c480&units=metric`;
    axios.get(url).then(function (response) {
      console.log(response);
      // setCity(response.data.name);
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form
        id="form-size"
        className="d-flex g-3 mb-2 justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="me-1">
          <input
            type="search"
            className="form-control"
            placeholder="Type the city"
          ></input>
        </div>
        <div className="ms-1">
          <button
            type="submit"
            className="btn btn-primary justify-content-md-end"
          >
            Search
          </button>
        </div>
      </form>
      <br />
      <ShowTemperature
        city={city}
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
      />
    </div>
  );
}
