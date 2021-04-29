import styled from 'styled-components';

export const Nav = styled.div`
  background: ${(props) => props.theme.fairPink};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  padding: 1rem 5rem 0.2rem;
`;
export const Links = styled.div`
  display: flex;
  height: auto;
  align-items: flex-start;
  color: ${(props) => props.theme.midnightBlue};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  height: 100%;
`;
