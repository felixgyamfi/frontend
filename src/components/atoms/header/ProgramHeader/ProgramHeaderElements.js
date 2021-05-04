import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 54em;
  background: ${(props) => props.theme.sunGlow};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.sunGlow} 0%,
    ${(props) => props.theme.cottonCandy} 100%
  );
  padding: 2.5em 2em;
`;
export const InfoWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
`;

export const InfoText = styled.p`
  font-size: 1em;
  letter-spacing: 0.2rem;
`;

export const ProgramTitle = styled.div`
  text-align: center;
`;
