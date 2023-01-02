import React from 'react';

const Weather = ({ city, weather }) => {
  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>temperature: {weather.main.temp} Celsius</p> 
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />        
      <p>wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather;