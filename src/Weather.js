import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [ready, setReady] = useState(false);
  let [currentDate, setCurrentDate] = useState(null);
  let [city, setCity] = useState("Lisbon");
  let [searchQuery, setSearchQuery] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [unit, setUnit] = useState("celsius");
  let [coordinates, setCoordinates] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "644d229ac57327a321e9ff74a30c10c1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleApiResponse);
  }

  function updateCity(event) {
    setSearchQuery(event.target.value);
  }

  function handleApiResponse(response) {
    setCurrentDate(new Date(response.data.dt * 1000));
    setCity(response.data.name);
    setSearchQuery(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setUnit(response.data.temperature);
    setCoordinates(response.data.coord);

    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="weather-container">
          <div className="wrapping">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="card shadow-lg p-3 mt-5 mb-5 bg-body rounded">
                  <div className="card-body">
                    <div className="search-weather">
                      <div className="row">
                        <div className="col-12 mt-5 mb-5 text-justify-center">
                          <div>
                            <form
                              id="form-size"
                              className="row justify-content-start"
                              onSubmit={handleSubmit}
                            >
                              <div className="col-9 mb-5">
                                <input
                                  type="search"
                                  className="form-control"
                                  placeholder="Type the city"
                                  onChange={updateCity}
                                ></input>
                              </div>
                              <div className="col-2">
                                <button
                                  type="submit"
                                  className="btn btn-success justify-content-md-end"
                                >
                                  Search
                                </button>
                              </div>
                            </form>
                            <ShowWeather
                              city={city}
                              currentDate={currentDate}
                              temperature={temperature}
                              description={description}
                              humidity={humidity}
                              wind={wind}
                              icon={icon}
                            />
                            <WeatherForecast
                              icon={icon}
                              coordinates={coordinates}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "644d229ac57327a321e9ff74a30c10c1";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleApiResponse);
    return "Loading...";
  }
}
