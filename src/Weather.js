import React from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
  }

  let apiKey = "5c67d9771dba3f2ffddccbc1dceb6a67";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="center-align">
      <h2>Hello from Weather</h2>
      <Hearts color="red" height={80} width={80} />
    </div>
  );
}
