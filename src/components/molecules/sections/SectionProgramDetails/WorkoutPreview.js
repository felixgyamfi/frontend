import React from 'react';
import styled from 'styled-components';
import Play from './assets/icon--play-large.svg';
import HeartLink from '../../../atoms/Links/HeartLink/HeartLink';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  margin-bottom: 1.5rem;
`;

const PlayButton = styled.img`
  height: 3rem;
  width: auto;
`;

const PlayWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
`;

const SpecsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.white};
  width: 100%;
  padding: 1.5rem;
`;

export function WorkoutPreview() {
  return (
    <Wrapper>
      <PlayWrap>
        <PlayButton src={Play} />
      </PlayWrap>
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
