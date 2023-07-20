import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [findCountry, setFindCountry] = useState([])
  const [show, setShow] = useState('')

  useEffect(() => {
    // console.log('effect');

    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    console.log('filter', filter)

    const regex = new RegExp(`${event.target.value}`, 'i')

    event.target.value === ''
      ? setFindCountry([])
      : setFindCountry(
          countries.filter((country) => country.name.common.search(regex) > -1)
        )

    if (event.target.value === '') {
      setShow('')
    }

    let search = countries.filter(
      (country) => country.name.common.search(regex) > -1
    )

    console.log('search length', search.length)
    console.log('search', search)

    // console.log('findPerson', findPerson);
  }

  const handleShowCountry = (event) => {
    console.log(event.target.value)
    setShow(event.target.value)
  }

  return (
    <div className='App'>
      <Filter filter={filter} onChange={handleFilterChange} />
      <Countries
        findCountry={findCountry}
        show={show}
        handleShowCountry={handleShowCountry}
      />
    </div>
  )
}

export default App
