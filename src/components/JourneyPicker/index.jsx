import React, { useState, useEffect } from 'react';
import './style.css';
import { use } from 'react';

export const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then((response) => response.json())
    .then((data) => {
      setCities(data.results);
      console.log('Data z API načtena:', data.results);
    })
}, []);

  const handleFromCity = (event) => {
    const newFromCity = event.target.value;
    setFromCity(newFromCity);
  };

  const handleToCity = (event) => {
    const newToCity = event.target.value;
    setToCity(newToCity);
  };

  const handleDate = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const journey = { fromCity, toCity, date };
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={handleFromCity} value={fromCity}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={handleToCity} value={toCity}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={handleDate} value={date}>
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" alt="Mapa" />
      </div>
    </div>
  );
};
