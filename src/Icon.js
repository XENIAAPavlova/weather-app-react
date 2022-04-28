import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  let size = props.size || 50;

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.icon]}
      color={props.color || "#B4E197"}
      size={size}
      animate={true}
    />
  );
}
// if (props.type === "sunny") {
//   return (
//     <ReactAnimatedWeather
//       icon={"CLEAR_DAY"}
//       color={"#4E944F"}
//       size={50}
//       animate={true}
//     />
//   );
// } else if (props.type === "rainy") {
//   return (
//     <ReactAnimatedWeather
//       icon={"RAIN"}
//       color={"#83BD75"}
//       size={50}
//       animate={true}
//     />
//   );
// } else if (props.type === "foggy") {
//   return (
//     <ReactAnimatedWeather
//       icon={"FOG"}
//       color={"#B4E197"}
//       size={50}
//       animate={true}
//     />
//   );
// } else {
//   return (
//     <ReactAnimatedWeather
//       icon={"PARTLY_CLOUDY_DAY"}
//       color={"#4E944F"}
//       size={80}
//       animate={true}
//     />
//   );
// }
