import React from 'react';
import { useLocation } from 'react-router-dom';
import Data from '../../atoms/Data/ProgramData';

function Program({ match }) {
  const location = useLocation();
  console.log(location);
  const { id } = match.params;

  return <div>{Data[id].title}</div>;
}

export default Program;
