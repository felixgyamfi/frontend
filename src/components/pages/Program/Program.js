import React from 'react';
import styled from 'styled-components';

import NavBar from '../../molecules/NavBar/index';
import Data from '../../atoms/Data/ProgramData';
import SectionDescription from '../../molecules/sections/SectionDescription/SectionDescription';
import SectionChart from '../../molecules/sections/SectionChart/SectionChart';
import ProgramHeader from '../../atoms/header/ProgramHeader/ProgramHeader';

const WrapperProgram = styled.div`
  padding: 0 0 7em;
`;

function Program({ match }) {
  const { id } = match.params;

  return (
    <>
      <WrapperProgram className="Program">
        <ProgramHeader title={Data[id].title} />
        <SectionDescription />
        <SectionChart />
      </WrapperProgram>
      <NavBar />
    </>
  );
}

export default Program;
