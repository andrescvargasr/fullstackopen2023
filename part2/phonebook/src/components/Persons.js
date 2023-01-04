import React from 'react';
import Person from './Person';

const Persons = ({ findPerson, handleDeletePerson }) => {
  return (
    <ul>
      {findPerson.map((person, i) => <Person key={person.name} person={person} handleDeletePerson={handleDeletePerson} />)}
    </ul>
  )
}

export default Persons;