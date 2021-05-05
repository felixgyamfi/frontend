import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled.div`
  margin: 0 auto;
`;
export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.midnightBlue};
  text-decoration: none;
  margin: 0 auto;
`;
export const IconWrap = styled.div`
  height: 2.5em;
`;

export const Icon = styled.img``;

export const LinkText = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1em;
  margin-top: 0.3em;
`;
