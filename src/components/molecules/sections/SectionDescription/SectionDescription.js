import React from 'react';
import {
  DescriptionWrap,
  Description,
} from '../../../pages/Program/ProgramElements';

function SectionDescription({ description }) {
  return (
    <DescriptionWrap>
      <Description>{description}</Description>
    </DescriptionWrap>
  );
}

export default SectionDescription;
