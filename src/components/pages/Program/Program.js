import React from 'react';

import Data from '../../atoms/Data/ProgramData';
import SectionDescription from '../../molecules/sections/SectionDescription/SectionDescription';
import SectionChart from '../../molecules/sections/SectionChart/SectionChart';
import ProgramHeader from '../../atoms/header/ProgramHeader/ProgramHeader';

function Program({ match }) {
  const { id } = match.params;

  return (
    <div className="Program">
      <ProgramHeader title={Data[id].title} />
      <SectionDescription />
      <SectionChart />
    </div>
  );
}

export default Program;
