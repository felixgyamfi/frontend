import styled from 'styled-components';

export const Nav = styled.div`
  background: ${(props) => props.theme.fairPink};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding-top: 1rem;
  align-items: center;
  justify-content: space-between;
`;
export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
