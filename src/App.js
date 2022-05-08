import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <div className="row mt-1 mb-5">
          <div className="text-center">
            This project was coded by Xenia and it's an{" "}
            <a
              href="https://github.com/XENIAAPavlova/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-source code.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
