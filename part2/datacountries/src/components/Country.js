import React from 'react';
import Languages from './Languages';
import Flag from './Flag';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}<br />
        area {country.area}
      </p>
      <h2>languages:</h2>
      <Languages languages={country.languages} />
      <Flag flag={country.flags.png} country={country.name.common} />
    </div>
  )
}

export default Country;