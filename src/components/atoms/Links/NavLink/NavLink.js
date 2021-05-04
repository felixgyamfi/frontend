import React from 'react';
import { Li, StyledLink, IconWrap, Icon, LinkText } from './NavLinkElements';

export function NavLink({ image, text, link }) {
  return (
    <Li>
      <StyledLink to={link}>
        <IconWrap>
          <Icon src={image} alt="home" />
        </IconWrap>
        <LinkText>{text}</LinkText>
      </StyledLink>
    </Li>
  );
}
