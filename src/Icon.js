import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  if (props.type === "sunny") {
    return (
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color={"#4E944F"}
        size={50}
        animate={true}
      />
    );
  } else if (props.type === "rainy") {
    return (
      <ReactAnimatedWeather
        icon={"RAIN"}
        color={"#83BD75"}
        size={50}
        animate={true}
      />
    );
  } else if (props.type === "foggy") {
    return (
      <ReactAnimatedWeather
        icon={"FOG"}
        color={"#B4E197"}
        size={50}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={"PARTLY_CLOUDY_DAY"}
        color={"#4E944F"}
        size={80}
        animate={true}
      />
    );
  }
}

