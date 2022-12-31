import React from 'react'

const Languages = ({ languages }) => {
  return (
    <ul>
        {Object.values(languages).map(language => <li key={language}>{language}</li>)}
      </ul>
  )
}

export default Languages