import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';

const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: ${(props) => props.theme.fairPink};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  padding: 1rem 5rem 0.2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  height: auto;
  color: ${(props) => props.theme.midnightBlue};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  height: 100%;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  object-fit: contain;
  padding: 0 3em;
  max-height: 2.5em;
`;

function NavBar() {
  return (
    <div>
      <Nav>
        <Links>
          <Li to="#">
            <NavLink />
          </Li>
          <Li to="#">
            <NavLink />
          </Li>
          <Li to="#">
            <NavLink />
          </Li>
        </Links>
      </Nav>
    </div>
  );
}

export default NavBar;
