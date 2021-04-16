import React, { useState, useEffect } from "react";
import CityPicker from "./CityPicker";
import CurrentWeather from "./CurrentWeather";
import HomeStyles from "./HomeStyles";
import Error from "./Error";
const Home = () => {
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "562d1e843234eda0a925eec706aa6632";
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=${appId}&units=metric&q=${city}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);
        console.log(resultado.sys.country);
        // Detecta si hubo resultado correctos
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
  }, [consultar, city]);
  let componente;
  if (error) {
    componente = <Error mensaje=" Error 404" />;
  } else {
    componente = <CurrentWeather resultado={resultado} />;
  }

  return (
    <HomeStyles>
      <div className="row">
        <CityPicker
          setCity={setCity}
          setConsultar={setConsultar}
          setError={setError}
          city={city}
          error={error}
        ></CityPicker>
        {componente}
      </div>
    </HomeStyles>
  );
};

export default Home;
