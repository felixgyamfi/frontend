import React from 'react';
import styled from 'styled-components';

export const WrapperWelcome = styled.div`
  margin-top: 7rem;
`;

export function WelcomeHead() {
  return (
    <WrapperWelcome>
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
