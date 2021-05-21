import React from 'react';
import HeartLink from '../../../atoms/Links/HeartLink/HeartLink';
import { Wrapper, SpecsWrap } from './WorkoutPreviewElements';
import { PlayButton } from '../../../atoms/Buttons/PlayButton/PlayButton';

export function WorkoutPreview({ link }) {
  return (
    <Wrapper>
      <PlayButton link={link} />
      <SpecsWrap>
        <div>
          <p>Tag 1 </p>
          <p>XXX kcal · 26 Min. · Beweglichkeit</p>
        </div>
        <HeartLink />
      </SpecsWrap>
    </Wrapper>
  );
}
