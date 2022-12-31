import React from 'react';
import Person from './Person';

const Persons = ({ persons, findPerson }) => {
  findPerson.length === 0 ? findPerson = persons : findPerson = findPerson;
  return (
    <ul>
      {findPerson.map((person, i) => <Person key={person.name} person={person} />)}
    </ul>
  )
}

export default Persons;