import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.midnightBlue};
`;
export const Li = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 2.5em;
`;
export const IconWrap = styled.div`
  height: 2.5em;
`;

export const Icon = styled.img``;
