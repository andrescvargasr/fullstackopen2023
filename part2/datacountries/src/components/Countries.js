import React from 'react';
import Country from './Country';
import { useState } from 'react';

function Countries({ findCountry }) {
  const [show, setShow] = useState('');

  const handleShowCountry = (event) => {
    console.log(event.target.value);
    setShow(event.target.value); 
  }
  
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
            </div>)}
      {show !== '' ? <Country country={findCountry.find(country => country.name.common === show)} /> : <></>}
      </div>
  )
}

export default Countries;