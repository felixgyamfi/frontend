import React from 'react';
import { createLinks as LinkList } from './createLinks';
import { Nav, Links } from './NavBarElements';

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
