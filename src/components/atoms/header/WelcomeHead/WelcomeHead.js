import React from 'react';
import styled from 'styled-components';

export const WrapperWelcome = styled.div`
  margin-top: 7rem;
  white-space: pre-line;
`;

export function WelcomeHead() {
  return (
    <WrapperWelcome>
      <h1>
        Guten {'\n'}
        Morgen, {'\n'}
        Name
      </h1>
    </WrapperWelcome>
  );
}

export default WelcomeHead;
