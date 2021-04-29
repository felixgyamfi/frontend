import React from 'react';
import Daily from './Data';

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
  const a = Daily.map(
    ({ type, title, program, img, alt, calories, duration, flexibility }) => (
      <>
        <HeadingWrapper>
          <h2>Dein Workout heute</h2>
          <p>{type}</p>
        </HeadingWrapper>
        <Workout>
          <ImgWrapper src={img} alt={alt} />
          <WInfo>
            <WInfoTitle>
              {title}
              <br />
              {program}
            </WInfoTitle>
            <WInfoStats>
              {calories} kcal · {duration} Min. · Beweglichkeit {flexibility}
            </WInfoStats>
          </WInfo>
        </Workout>
      </>
    )
  );
  return <div>{a}</div>;
};

export default function mapDailyWorkout() {
  return (
    <>
      <Map />
    </>
  );
}
