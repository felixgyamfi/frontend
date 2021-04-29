import React from 'react';
import HeartLink from '../../atoms/Links/HeartLink/HeartLink';
import {
  Wrapper,
  ProgramTitleWrap,
  ProgramTitle,
  CardNotification,
} from './ProgramCardElements';

function ProgramCard() {
  return (
    <>
      <Wrapper>
        <HeartLink />
        <ProgramTitleWrap>
          <ProgramTitle>100 Sit-ups Challenge</ProgramTitle>
        </ProgramTitleWrap>
        <CardNotification>Neu</CardNotification>
      </Wrapper>
    </>
  );
}

export default ProgramCard;
