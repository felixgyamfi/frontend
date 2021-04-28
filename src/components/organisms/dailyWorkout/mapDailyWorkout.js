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

const Map = () => {
  const a = Data.map((e) => (
    <>
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
    </>
  ));
  return <div>{a}</div>;
};

export default function mapDailyWorkout() {
  return (
    <>
      <Map />
    </>
  );
}
