import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../../atoms/Links/NavLink/NavLink';
import links from '../../atoms/Data/NavLinksData';

export const createLinks = () => {
  const a = links.map((link) => (
    <NavLink text={link.text} image={link.image} link={link.link} />
  ));
  const StyledLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    color: ${(props) => props.theme.midnightBlue};
  `;

  return <StyledLink>{a}</StyledLink>;
};
