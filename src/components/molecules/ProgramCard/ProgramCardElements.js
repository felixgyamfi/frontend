import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  background: ${(props) => props.theme.fairPink};
  height: 21.5em;
  display: flex;
  justify-content: space-between;
  padding: 1.2em 1.6em;
  border-radius: 5px;
  margin: 1em 0;
  text-decoration: none;

  &:hover {
    background: ${(props) => props.theme.summerSky};
  }
`;
export const ProgramTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProgramTitle = styled.h2`
  margin: 0 50%;
  min-width: 100%;
`;

export const CardNotification = styled.p`
  font-size: 1.2em;
`;
