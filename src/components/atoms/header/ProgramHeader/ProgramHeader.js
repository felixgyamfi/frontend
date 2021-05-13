import React from 'react';
import Close from '../../Buttons/CloseButton/CloseButton';
import {
  Header,
  ProgramTitle,
  InfoWrap,
  InfoText,
} from './ProgramHeaderElements';

function ProgramHeader({ title, categories, difficulty, duration }) {
  return (
    <Header>
      <Close to="/browse" />
      <ProgramTitle>
        <h1>{title}</h1>
      </ProgramTitle>
      <InfoWrap>
        <div>
          <img src="" alt="" />
          <InfoText>{categories}</InfoText>
        </div>
        <div>
          <img src="" alt="" />
          <InfoText>{difficulty}</InfoText>
        </div>
        <div>
          <img src="" alt="" />
          <InfoText>{duration} Wochen</InfoText>
        </div>
      </InfoWrap>
    </Header>
  );
}

export default ProgramHeader;
