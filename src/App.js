import Weather from "./Weather";
import "./App.css";
import SearchWeather from "./SearchWeather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container">
          <div className="wrapping">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="card shadow-lg p-3 mt-5 mb-5 bg-body rounded">
                  <div className="card-body">
                    <div className="search-weather">
                      <div className="row">
                        <div className="col-12 mt-5 text-justify-center">
                          <SearchWeather />
                        </div>
                      </div>
                    </div>
                    <div className="city-details">
                      <div class="row">
                        <div class="col-8">
                          <h2>Berlin</h2>
                          <div />
                        </div>
                        <div class="col-8 mt-2 mb-5">
                          <p>Friday 15:50</p>
                          <p>Scattered Clouds</p>
                        </div>
                      </div>{" "}
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
}

export default App;
