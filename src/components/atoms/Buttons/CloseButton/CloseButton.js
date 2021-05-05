import React from 'react';
import styled from 'styled-components';
import CloseIcon from './assets/icon--x_close.png';

export const ClButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function CloseButton() {
  return (
    <ClButton>
      <img src={CloseIcon} alt="Close Button" />
    </ClButton>
  );
}

export default CloseButton;
