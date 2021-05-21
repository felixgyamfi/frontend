import styled from 'styled-components';

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WorkoutsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0;
`;
export const Wrapper = styled.div`
  padding: 2.5rem;
  margin: 1.5rem 0;
`;
export const Section = styled.div`
  background: ${(props) => props.theme.fairPink};
`;
