import axios from 'axios';

import { useState, useEffect } from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [findPerson, setFindPerson] = useState([]);

  useEffect(() => {
    // console.log('effect');

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
        setFindPerson(findPerson => [...response.data]);
      });
  }, []);

  const addNote = (event) => {
    event.preventDefault();

    let personObject = { };

    if (!persons.some(person => person.name === newName)) {
      personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    } else {
      // personObject = { };
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(filter => event.target.value);

    event.target.value === '' ? setFindPerson(persons) : setFindPerson(persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())));

    // console.log('findPerson', findPerson);
  }

  // filter.length === 0 ? setFindPerson(findPerson => [...persons]) : setFindPerson(findPerson => [...findPerson]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addNote} newName={newName} onNameChange={handleNameChange} newNumber={newNumber}  onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons findPerson={findPerson} />
    </div>
  )
}

export default App;