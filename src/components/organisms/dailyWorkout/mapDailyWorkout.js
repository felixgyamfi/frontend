import React from 'react';
import Data from './Data';
import Bg from './assets/img--dashboard-l.png';

import {
  Wrapper,
  HeadingWrapper,
  Workout,
  ImgWrapper,
  WInfo,
  WInfoTitle,
  WInfoStats,
} from './DailyWorkoutElements';

export const HeadingStyled = () => {
  const a = Data.map((e) => (
    <div>
      <HeadingWrapper>
        <h2>Dein Workout heute</h2>
        <p>{e.type}</p>
      </HeadingWrapper>
      <Workout>
        <ImgWrapper src={Bg} alt={e.alt} />
        <WInfo>
          <WInfoTitle>
            {e.title}
            <br />
            {e.program}
          </WInfoTitle>
          <WInfoStats>{e.stats}</WInfoStats>
        </WInfo>
      </Workout>
    </div>
  ));
  return <div>{a}</div>;
};

export default function Section({ id, type, title, program, alt, stats }) {
  return (
    <div>
      <HeadingStyled />
    </div>
  );
}
