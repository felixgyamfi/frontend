import React from 'react';
import {
  Section,
  Wrapper,
  TopRow,
  WorkoutsWrap,
} from './SectionProgramDetailElements';
import { WorkoutPreview } from './WorkoutPreview';

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
