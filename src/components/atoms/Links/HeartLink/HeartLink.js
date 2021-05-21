import React from 'react';
import styled from 'styled-components';
import HeartIcon from './assets/icon--heart.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Icon = styled.img`
  width: 1.6em;
  height: auto;
  object-fit: contain;
`;
function HeartLink() {
  return (
    <Wrapper>
      <Icon src={HeartIcon} alt="Heart Icon" />
    </Wrapper>
  );
}

export default HeartLink;
