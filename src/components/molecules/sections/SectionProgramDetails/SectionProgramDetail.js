import React from 'react';
import styled from 'styled-components';
import { WorkoutPreview } from './WorkoutPreview';

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkoutsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0;
`;

const Wrapper = styled.div`
  padding: 2.5rem;
  margin: 1.5rem 0;
`;
const Section = styled.div`
  background: ${(props) => props.theme.fairPink};
`;

function SectionProgramDetail() {
  return (
    <Section>
      <Wrapper>
        <TopRow>
          <h3>21 Tage</h3>
          <p>Alle anzeigen</p>
        </TopRow>
        <WorkoutsWrap>
          <WorkoutPreview />
          <WorkoutPreview />
          <WorkoutPreview />
        </WorkoutsWrap>
      </Wrapper>
    </Section>
  );
}

export default SectionProgramDetail;
