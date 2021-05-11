import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import NavBar from '../../molecules/NavBar/index';
import SectionDescription from '../../molecules/sections/SectionDescription/SectionDescription';
import SectionChart from '../../molecules/sections/SectionChart/SectionChart';
import ProgramHeader from '../../atoms/header/ProgramHeader/ProgramHeader';

import { GET_PROGRAM } from '../../../GraphQL/Queries';

const WrapperProgram = styled.div`
  padding: 0 0 7em;
`;

function Program({ match }) {
  const { id } = match.params;
  const { error, loading, data } = useQuery(GET_PROGRAM);
  const serverData = data;

  if (loading) {
    return (
      <>
        <WrapperProgram className="Program">
          <ProgramHeader title="loading..." />
        </WrapperProgram>
        <NavBar />
      </>
    );
  }
  if (error) {
    return (
      <>
        <WrapperProgram className="Program">
          <ProgramHeader title="error..." />
        </WrapperProgram>
        <NavBar />
      </>
    );
  }

  return (
    <>
      <WrapperProgram className="Program">
        <ProgramHeader
          title={serverData?.allProgram[id].title}
          categories={serverData?.allProgram[id].focus}
          difficulty={serverData?.allProgram[id].difficulty}
          duration={serverData?.allProgram[id].duration}
        />
        <SectionDescription />
        <SectionChart />
      </WrapperProgram>
      <NavBar />
    </>
  );
}

export default Program;
