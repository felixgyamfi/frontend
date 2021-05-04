import React from 'react';
import Close from '../../Buttons/CloseButton/CloseButton';
import {
  Header,
  ProgramTitle,
  InfoWrap,
  InfoText,
} from './ProgramHeaderElements';

function ProgramHeader({ title }) {
  return (
    <Header>
      <Close />
      <ProgramTitle>
        <h1>{title}</h1>
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
  );
}

export default ProgramHeader;
