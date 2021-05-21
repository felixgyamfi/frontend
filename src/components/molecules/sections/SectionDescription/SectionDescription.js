import React from 'react';
import styled from 'styled-components';

export const DescriptionWrap = styled.div``;

export const Description = styled.p`
  background: ${(props) => props.theme.fairPink};
  padding: 2.5rem;
  font-size: 1.6em;
  line-height: 2.1rem;
`;

function SectionDescription({ description }) {
  return (
    <DescriptionWrap>
      <Description>{description}</Description>
    </DescriptionWrap>
  );
}

export default SectionDescription;
