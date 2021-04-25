import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export function NavLink({ image, text, link }) {
  return (
    <Li>
      <StyledLink to={link}>
        <img src={image} alt="home" />
        {text}
      </StyledLink>
    </Li>
  );
}
