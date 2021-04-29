import React from 'react';
import styled from 'styled-components';
import ProgramCard from '../../molecules/ProgramCard/ProgramCard';
import ProgramCards from './mapProgram';

const WrapperBrowse = styled.div`
  padding: 7.5em 1.7em 0;
`;

const Filter = styled.div`
  margin: 2.5em 0;
`;

function Browse() {
  return (
    <WrapperBrowse className="Browse">
      <h2>Browse</h2>
      <Filter>
        <p>Filter</p>
      </Filter>
      <ProgramCards />
    </WrapperBrowse>
  );
}

export default Browse;
