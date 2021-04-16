import React from "react";
const CurrentWeather = ({ resultado }) => {
  const { name, sys, weather, main } = resultado;
  if (!name) return null;
  console.log(resultado);
  if (!resultado) return null;
  return (
    <div className="card">
      <div className="sal">
        <h1> CurrentWeather</h1>
        <div className="content">
          <div className="main-info">
            <div className="city">{`${name},${sys.country}`}</div>
            <div className="description">{weather[0].main}</div>
            <div className="temp">
              {main.temp.toFixed(0)}
              <span className="degrees">°C</span>
            </div>
            <div className="feels-like">
              {" "}
              Feels like {main.feels_like.toFixed(0)}
            </div>
          </div>
          <div className="secondary-info">
            <img
              class="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            />
            <div>Humidity: {main.humidity} </div>
            <div>Wind: {resultado.wind.speed} m/s</div>
            <div>Pressure: {main.pressure}hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
