import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Play from './assets/icon--play-large.svg';

export const Button = styled.img`
  height: 3rem;
  width: auto;
`;

export const PlayWrap = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export function PlayButton({ link }) {
  return (
    <PlayWrap to={link}>
      <Button src={Play} />
    </PlayWrap>
  );
}
