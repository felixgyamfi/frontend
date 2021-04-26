import React from 'react';
import Data from './Data';

const getData = () => {
  const a = Data.map((element) => (
    <div text={element.text} name={element.name} />
  ));
  return <div>{a}</div>;
};

export default getData;
