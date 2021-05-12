import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CloseIcon from './assets/icon--x_close.png';

export const Button = styled(Link)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function CloseButton({ to }) {
  return (
    <Wrapper>
      <Button to={to}>
        <img src={CloseIcon} alt="Close Button" />
      </Button>
    </Wrapper>
  );
}

export default CloseButton;
