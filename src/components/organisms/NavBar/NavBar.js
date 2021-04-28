import React from 'react';
import styled from 'styled-components';
import { createLinks as LinkList } from './createLinks';

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
