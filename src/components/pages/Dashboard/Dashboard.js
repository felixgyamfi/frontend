import React from 'react';
import styled from 'styled-components';

import Content from '../../organisms/DailyWorkout/index.js';
import { WelcomeHead } from '../../atoms/WelcomeHead';

const WrapperDash = styled.div`
  padding: 0 1.7rem;
`;

function Dashboard() {
  return (
    <WrapperDash>
      <WelcomeHead />
      <Content />
    </WrapperDash>
  );
}

export default Dashboard;
