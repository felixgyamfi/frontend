import React from 'react';

import {
  HeadingWrapper,
  Workout,
  ImgWrapper,
  WInfo,
  WInfoTitle,
  WInfoStats,
} from './DailyWorkoutElements';

function DailyWorkoutNew({
  type,
  img,
  alt,
  title,
  program,
  calories,
  duration,
  flexibility,
}) {
  return (
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
  );
}

export default DailyWorkoutNew;
