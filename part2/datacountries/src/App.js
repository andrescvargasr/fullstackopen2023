import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [findCountry, setFindCountry] = useState([]);

  useEffect(() => {
    // console.log('effect');

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled');
        setCountries(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
    console.log('filter', filter);

    event.target.value === '' ? setFindCountry([]) : setFindCountry(countries.filter(country => country.name.common.toLowerCase().startsWith(filter.toLowerCase())));

    // console.log('findPerson', findPerson);
  }


  return (
    <div className="App">
      <Filter filter={filter} onChange={handleFilterChange} />
      <div>
        {findCountry.map(country => <div key={country.name.common}>{country.name.common}</div>)}
      </div>
    </div>
  );
}

export default App;
