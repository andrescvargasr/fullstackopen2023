import { useState } from 'react';
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote} >
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          {/* <div>debug: {newName}</div> */}
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App;