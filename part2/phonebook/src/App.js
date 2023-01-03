import axios from 'axios';

import { useState, useEffect } from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [findPerson, setFindPerson] = useState([]);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled');
        setPersons(initialPersons);
        setFindPerson(findPerson => [...initialPersons]);
      });
  }, []);

  const addNote = (event) => {
    event.preventDefault();

    if (!persons.some(person => person.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson));
          setFindPerson(findPerson => [...persons, returnedPerson]);
          setNewName('');
          setNewNumber('');
        });
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

    const regex = new RegExp(`${event.target.value}`, 'i');

    event.target.value === '' ? setFindPerson(persons) : setFindPerson(persons.filter(person => person.name.search(regex) > -1));

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