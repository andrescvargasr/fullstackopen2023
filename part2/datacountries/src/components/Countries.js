import React from 'react';
import Country from './Country';

function Countries({ findCountry, show, handleShowCountry }) {
  return (
    <div>
      {findCountry.length > 10
        ? 'Too many matches, specify'
        : findCountry.length === 1
          ? <Country country={findCountry[0]} />
          : findCountry.map(country => 
            <div key={country.name.common}>
              <div>
                {country.name.common}
                <button type='button' value={country.name.common} onClick={handleShowCountry}>show</button>
              </div>
            </div>)
            }
      {show !== '' && findCountry.length >= 1 ? <Country country={findCountry.find(country => country.name.common === show)} /> : <></>}
      </div>
  )
}

export default Countries;