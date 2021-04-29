import React from 'react';
import styled from 'styled-components';

import Content from '../../organisms/dailyWorkout/index.js';
import { WelcomeHead } from '../../atoms/header/WelcomeHead/WelcomeHead';

const WrapperDash = styled.div`
  padding: 0 1.7rem;
`;

function Dashboard() {
  return (
    <WrapperDash className="Dashboard">
      <WelcomeHead />
      <Content />
    </WrapperDash>
  );
}

export default Dashboard;
