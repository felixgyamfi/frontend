import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeLogo from './assets/icon--home.png';

const StyledLink = styled(Link)`
  text-decoration: none;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.midnightBlue};
`;

const Li = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 2.5em;
`;

export function NavLink() {
  return (
    <Li to="/Dashboard">
      <StyledLink>
        <img src={homeLogo} alt="home" />
        HOME
      </StyledLink>
    </Li>
  );
}
