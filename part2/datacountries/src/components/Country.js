import React from 'react';
import Languages from './Languages';
import Flag from './Flag';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Weather from './Weather';

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;
  // variable api_key has now the value set in startup

  useEffect(() => {
    // console.log('effect');

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`)
      .then(response => {
        console.log('promise fulfilled weather');
        console.log(response.data);
        setWeather(response.data);
      });
  }, [ country.capital, api_key ]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}<br />
        area {country.area}
      </p>
      <h2>languages:</h2>
      <Languages languages={country.languages} />
      <Flag flag={country.flags.png} country={country.name.common} />
      {weather.length !== 0
        ? <Weather city={country.capital} weather={weather} />
        : <p>loading...</p>}
    </div>
  )
}

export default Country;