import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import NavBar from '../../molecules/NavBar/index';
import SectionDescription from '../../molecules/sections/SectionDescription/SectionDescription';
import SectionChart from '../../molecules/sections/SectionChart/SectionChart';
import ProgramHeader from '../../atoms/header/ProgramHeader/ProgramHeader';

import { GET_PROGRAM_BY_SLUG } from '../../../GraphQL/Queries';
import SectionProgramDetail from '../../molecules/sections/SectionProgramDetails/SectionProgramDetail';

const WrapperProgram = styled.div`
  padding: 0 0 7em;
`;

function Program({ match }) {
  const { slug } = match.params;
  const { error, loading, data } = useQuery(GET_PROGRAM_BY_SLUG, {
    variables: { slug },
  });
  console.log(data);

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
          title={data?.allProgram[0]?.title}
          categories={data?.allProgram[0]?.focus}
          difficulty={data?.allProgram[0]?.difficulty}
          duration={data?.allProgram[0]?.duration}
        />
        <SectionDescription description={data?.allProgram[0]?.description} />
        <SectionChart />
        <SectionProgramDetail />
      </WrapperProgram>
      <NavBar />
    </>
  );
}

export default Program;
