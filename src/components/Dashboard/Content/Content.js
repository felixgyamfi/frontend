import React from 'react';
import styled from 'styled-components';

import { ReactComponent as imgLarge } from './assets/img--dashboard.svg';

const Wrapper = styled.div`
  margin-top: 3.3em;
  display: flex;
  align-items: center;
`;

const Heading = styled.div`
  justify-content: space-between;
`;

const Workout = styled.div`
  width: 100%;
  height: auto;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
`;

function Content() {
  return (
    <Wrapper>
      <Heading>
        <h2>Dein Workout heute</h2>
        <p>Trainingsplan</p>
      </Heading>
      <Workout>
        <ImgWrapper>
          <imgLarge />
        </ImgWrapper>
        <div>
          Titel des Workouts
          <br />
          Titel des Programms
          <br />
          XXX kcal · 26 Min. · Beweglichkeit
        </div>
      </Workout>
    </Wrapper>
  );
}

export default Content;
