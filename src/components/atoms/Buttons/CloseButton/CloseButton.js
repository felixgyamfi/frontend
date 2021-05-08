import React from 'react';
import styled from 'styled-components';
import CloseIcon from './assets/icon--x_close.png';

export const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function CloseButton({ href }) {
  return (
    <Link href={href}>
      <img src={CloseIcon} alt="Close Button" />
    </Link>
  );
}

export default CloseButton;
