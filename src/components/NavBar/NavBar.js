import React from 'react';
import styled from 'styled-components';

const WrapperNav = styled.div`
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

const WrapperLink = styled.div`
  display: flex;
  color: ${(props) => props.theme.midnightBlue};
  font-size: 1rem;
  letter-spacing: 0.2rem;
`;

function NavBar() {
  return (
    <WrapperNav>
      <WrapperLink>HOME</WrapperLink>
      <WrapperLink>BROWSE</WrapperLink>
      <WrapperLink>PROFIL</WrapperLink>
    </WrapperNav>
  );
}

export default NavBar;
