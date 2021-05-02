import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-router-dom';

import CloseIcon from './assets/icon--x_close.png';
import Figpie from './assets/img--Figpie.png';

import Data from '../../atoms/Data/ProgramData';

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 54em;
  background: ${(props) => props.theme.sunGlow};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.sunGlow} 0%,
    ${(props) => props.theme.cottonCandy} 100%
  );
  padding: 2.5em 2em;
`;
export const InfoWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
`;

export const InfoText = styled.p`
  font-size: 1em;
  letter-spacing: 0.2rem;
`;

export const ProgramTitle = styled.div`
  text-align: center;
`;

export const DescriptionWrap = styled.div``;

export const Description = styled.p`
  background: ${(props) => props.theme.fairPink};
  padding: 2.5rem;
  font-size: 1.6em;
  line-height: 2.1rem;
`;

export const Partitions = styled.div`
  padding: 2.5em;
`;

export const Wrapper = styled.div`
  display: flex;
`;

function Program({ match }) {
  console.log(match.params);
  const { id } = match.params;

  return (
    <div className="Program">
      <Header>
        <CloseButton>
          <img src={CloseIcon} alt="Close Button" />
        </CloseButton>
        <ProgramTitle>
          <h1>{Data[id].title}</h1>
        </ProgramTitle>
        <InfoWrap>
          <div>
            <img src="" alt="" />
            <InfoText>Abnehmen</InfoText>
          </div>
          <div>
            <img src="" alt="" />
            <InfoText>Leicht</InfoText>
          </div>
          <div>
            <img src="" alt="" />
            <InfoText>6 Wochen</InfoText>
          </div>
        </InfoWrap>
      </Header>
      <DescriptionWrap>
        <Description>
          Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
          Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
          Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
          Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt
          sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in
          dem einem gebratene Satzteile in den Mund fliegen.
        </Description>
      </DescriptionWrap>
      <Partitions>
        <h3>So ist das Programm aufgeteilt:</h3>
        <Wrapper>
          <img src={Figpie} alt="Tortendiagramm" />
          <div>
            <div>
              <div>Farbe</div>
              <p>Krafttraining</p>
            </div>
          </div>
        </Wrapper>
      </Partitions>
    </div>
  );
}

export default Program;
