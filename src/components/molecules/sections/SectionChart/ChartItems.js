import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  margin-left: 3rem;
`;

const RoundedCircle = styled.span`
  height: 1.4rem;
  width: 1.4rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

function ChartItem() {
  return (
    <ItemWrapper>
      <RoundedCircle />
      <p>Krafttraining</p>
    </ItemWrapper>
  );
}

const ItemsWrapper = styled.div``;

function ChartItems() {
  return (
    <ItemsWrapper>
      <ChartItem />
      <ChartItem />
      <ChartItem />
      <ChartItem />
    </ItemsWrapper>
  );
}

export default ChartItems;
