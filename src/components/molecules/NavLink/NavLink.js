import React from 'react';
import { Li, StyledLink, IconWrap, Icon } from './NavLinkElements';

export function NavLink({ image, text, link }) {
  return (
    <Li>
      <StyledLink to={link}>
        <IconWrap>
          <Icon src={image} alt="home" />
        </IconWrap>
        {text}
      </StyledLink>
    </Li>
  );
}
