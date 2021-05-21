import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  margin-bottom: 1.5rem;
`;

export const SpecsWrap = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.white};
  width: 100%;
  padding: 1.5rem;
`;
