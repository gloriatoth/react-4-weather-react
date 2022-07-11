import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Zurich",
    day: "Monday",
    hours: "17:12",
    description: "Sunny",
    temp: 30,
    humidity: 10,
    wind: 0,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
    <div className="Weather">
      <form className="mb-5">
        <div className="row">
          <div className="col-8 col-lg-10">
            <input
              type="search"
              placeholder="Type a city name.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-4 col-lg-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="col-6 info-today">
          <p className="day">
            {weatherData.day} <br /> {weatherData.hours}
          </p>
          <small>Last updated</small>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-2">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="icon"
          />
          <p>{weatherData.description}</p>
        </div>
        <div className="col-md-2">
          <p className="temp">{weatherData.temp}</p>
          <p>Degrees (C)</p>
        </div>
        <div className="col-md-2" />
        <div className="col-md-2" />
        <div className="col-md-2">
          <p className="humidity">{weatherData.humidity}</p>
          <p>Humidity (%)</p>
        </div>
        <div className="col-md-2">
          <p className="wind">{weatherData.wind}</p>
          <p>Wind (km/h)</p>
        </div>
      </div>
    </div>
  );
}
