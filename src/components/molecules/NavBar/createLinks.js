import React from 'react';
import { NavLink } from '../../atoms/Links/NavLink/NavLink';
import links from '../../atoms/Data/NavLinksData';

export const createLinks = () => {
  const a = links.map((link, index) => (
    <NavLink
      key={`NavLink-${index}`}
      text={link.text}
      image={link.image}
      link={link.link}
    />
  ));
  return <>{a}</>;
};
