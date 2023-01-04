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
        setFindPerson([...initialPersons]);
      });
  }, []);

  const addPerson = (event) => {
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
          setFindPerson([...persons, returnedPerson]);
          setNewName('');
          setNewNumber('');
        });
    } else {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);

      if (result) {
        const person = persons.find(person => person.name === newName);
        const changedPerson = { ...person, number: newNumber };

        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson));
            setFindPerson(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson));
            setNewName('');
            setNewNumber('');
          })
      }
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
  }

  const handleDeletePerson = (id) => {
    const person = persons.find(person => person.id === id);
    const result = window.confirm(`Delete ${person.name}?`);

    if (result) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setFindPerson(findPerson => findPerson.filter(person => person.id !== id));
        });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addPerson} newName={newName} onNameChange={handleNameChange} newNumber={newNumber}  onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons findPerson={findPerson} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App;