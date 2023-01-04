import React from 'react';

const DeletePerson = ({ id, handleDeletePerson }) => {
  return (
    <button onClick={() => handleDeletePerson(id)}>delete</button>
  )
}

export default DeletePerson;