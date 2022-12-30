import { useState } from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [findPerson, setFindPerson] = useState([...persons]);

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

    filter === '' ? setFindPerson(persons) : setFindPerson(persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())));

    // console.log('findPerson', findPerson);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addNote} newName={newName} onNameChange={handleNameChange} newNumber={newNumber}  onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} findPerson={findPerson} />
    </div>
  )
}

export default App;