import React from 'react';
import Country from './Country';

function Countries({ findCountry }) {
  return (
    <div>
        {findCountry.length > 10 ? 'Too many matches, specify' : findCountry.map(country => <div key={country.name.common}>{country.name.common}</div>)}
      </div>
  )
}

export default Countries;