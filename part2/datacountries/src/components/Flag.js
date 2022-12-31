import React from 'react';

const Flag = ({ flag, country }) => {
  return (
    <img src={flag} alt={`${country} flag`} width='200' />
  )
}

export default Flag;