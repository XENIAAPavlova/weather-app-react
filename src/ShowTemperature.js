import React, { useState } from "react";

export default function ShowTemperature(props) {
  // const [unit, setUnit] = useState("celsius");

  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  // }

  // function fahrenheit() {
  //   return (props.celsius * 9) / 5 + 32;
  // }

  // if (unit === "celsius") {
  return (
    <div className="ShowTemperature">
      <span className="temperature">
        <div className="number-grade fs-2 fw-bold">
          {Math.round(props.celsius)}
          <span className="unit text-start fw-normal fw-small">
            °C
            {/* <a
                style={{ textDecoration: "none" }}
                href="/"
                onClick={showFahrenheit}
              >
                °F
              </a> */}
          </span>
        </div>
      </span>
    </div>
  );
  // } else {
  //   return (
  //     <div className="ShowTemperature">
  //       <span className="temperature">
  //         <h3>
  //           {Math.round(fahrenheit())}
  //           <span className="unit text-center fs-5 fw-normal">
  //             <a
  //               style={{ textDecoration: "none" }}
  //               href="/"
  //               onClick={showCelsius}
  //             >
  //               °C
  //             </a>
  //             |°F
  //           </span>
  //         </h3>
  //       </span>
  //     </div>
  //   );
  // }
}
