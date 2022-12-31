import React from 'react';
import Person from './Person';

const Persons = ({ findPerson }) => {
  return (
    <ul>
      {findPerson.map((person, i) => <Person key={person.name} person={person} />)}
    </ul>
  )
}

export default Persons;