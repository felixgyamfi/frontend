import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../../molecules/NavLink/NavLink';
import links from './NavLinksData';

const Nav = styled.div`
  background: ${(props) => props.theme.fairPink};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  padding: 1rem 5rem 0.2rem;
`;

const Links = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  color: ${(props) => props.theme.midnightBlue};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  height: 100%;
`;

const LinkList = () => {
  const a = links.map((link) => (
    <NavLink text={link.text} image={link.image} link={link.link} />
  ));
  const StyledLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    height: 100%;
    color: ${(props) => props.theme.midnightBlue};
  `;

  return <StyledLink>{a}</StyledLink>;
};

function NavBar() {
  return (
    <div>
      <Nav>
        <Links>
          <LinkList />
        </Links>
      </Nav>
    </div>
  );
}

export default NavBar;
