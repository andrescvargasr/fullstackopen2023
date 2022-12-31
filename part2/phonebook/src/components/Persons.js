import React from 'react';
import Person from './Person';

const Persons = ({ filter, persons, findPerson }) => {
  filter.length > 0 ? findPerson = findPerson : findPerson = persons;
  return (
    <ul>
      {findPerson.map((person, i) => <Person key={person.name} person={person} />)}
    </ul>
  )
}

export default Persons;