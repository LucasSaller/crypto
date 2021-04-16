import React from "react";
import CityPickerStyles from "./CityPickerStyles";
import Error from "./Error";
const CityPicker = ({ setError, setConsultar, city, setCity, error }) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError(true);
    }
    setError(false);
    setConsultar(true);
  };
  return (
    <div className="card flex-grow 1">
      <CityPickerStyles>
        <form onSubmit={handleSubmit}>
          {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
          <h1>Weather in your city</h1>
          <label htmlFor="city">
            City:
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter a city e.g: London"
              onChange={handleChange}
              value={city}
            />
          </label>
          <button
            type="submit"
            className="waves-effect waves-light btn-large 
          btn-block yellow accent-4"
          >
            Search
          </button>
        </form>
      </CityPickerStyles>
    </div>
  );
};

export default CityPicker;
