import React, { useState } from "react";
import SearchWeather from "./SearchWeather";
import ShowTemperature from "./ShowTemperature";

export default function Weather() {
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
                          <SearchWeather />
                        </div>
                      </div>
                    </div>
                    <ShowTemperature />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}