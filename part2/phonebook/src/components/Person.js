import DeletePerson from "./DeletePerson";

const Person = ({ person, handleDeletePerson }) => {
  return (
    <li>{person.name} {person.number} <DeletePerson id={person.id} handleDeletePerson={handleDeletePerson} /></li>
  )
}

export default Person;