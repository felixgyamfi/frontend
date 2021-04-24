import React from 'react';
import styled from 'styled-components';

import Bg from './assets/img--dashboard-l.png';

const Wrapper = styled.div`
  margin-top: 3.3em;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const Heading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Workout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 21.5em;
  overflow: none;
`;

const ImgWrapper = styled.img`
  max-height: 21.5em;
  margin: 1em 0;
`;

const WInfo = styled.div`
  color: ${(props) => props.theme.midnightBlue};
`;

const WInfoTitle = styled.p`
  font-size: 1.6em;
`;

const WInfoStats = styled.p`
  font-size: 1em;
`;

function Content() {
  return (
    <Wrapper>
      <Heading>
        <h2>Dein Workout heute</h2>
        <p>Trainingsplan</p>
      </Heading>
      <Workout>
        <ImgWrapper src={Bg} alt="" />
        <WInfo>
          <WInfoTitle>
            Titel des Workouts
            <br />
            Titel des Programms
          </WInfoTitle>
          <WInfoStats>XXX kcal · 26 Min. · Beweglichkeit</WInfoStats>
        </WInfo>
      </Workout>
    </Wrapper>
  );
}

export default Content;
