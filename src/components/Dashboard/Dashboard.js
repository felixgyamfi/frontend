import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../themes/globalStyles';

import Content from './Content/index.js';

const WrapperDash = styled.div`
  padding: 0 1.7rem;
`;

const WrapperWelcome = styled.div`
  margin-top: 7rem;
`;

function Welcome() {
  return (
    <WrapperWelcome>
      <GlobalStyle />
      <h1>
        Guten
        <br />
        Morgen,
        <br />
        Name
      </h1>
    </WrapperWelcome>
  );
}

function Dashboard() {
  return (
    <WrapperDash>
      <Welcome />
      <Content />
    </WrapperDash>
  );
}

export default Dashboard;
