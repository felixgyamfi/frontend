import React from 'react';
import styled from 'styled-components';
import NavBar from '../../molecules/NavBar/index';
import ContentCards from './mapBrowse';

const WrapperBrowse = styled.div`
  padding: 7.5em 1.7em 7em;
`;

const Filter = styled.div`
  margin: 2.5em 0;
`;

function Browse() {
  return (
    <>
      <WrapperBrowse className="Browse">
        <h2>Browse</h2>
        <Filter>
          <p>Filter</p>
        </Filter>
        <ContentCards />
      </WrapperBrowse>
      <NavBar />
    </>
  );
}

export default Browse;
