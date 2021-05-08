import React from 'react';
import styled from 'styled-components';
import CloseIcon from './assets/icon--x_close.png';

export const Link = styled.a``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function CloseButton({ href }) {
  return (
    <Wrapper>
      <Link href={href}>
        <img src={CloseIcon} alt="Close Button" />
      </Link>
    </Wrapper>
  );
}

export default CloseButton;
