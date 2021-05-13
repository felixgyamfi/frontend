import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  margin-left: 3rem;
`;

function Circle({ color }) {
  const styles = {
    height: '1.4rem',
    width: '1.4rem',
    backgroundColor: `${color}`,
    borderRadius: '50%',
    display: 'inline-block',
    marginBottom: '1.8rem',
    marginRight: '1.2rem',
  };
  return (
    <div>
      <span className="Circle" style={styles} />
    </div>
  );
}

function ChartItem({ color, text }) {
  return (
    <ItemWrapper>
      <Circle color={color} />
      <p>{text}</p>
    </ItemWrapper>
  );
}

const ItemsWrapper = styled.div``;

function ChartItems() {
  return (
    <ItemsWrapper>
      <ChartItem text="Krafttraining" color="#7A8778" />
      <ChartItem text="Cardio" color="#939C91" />
      <ChartItem text="Koordination" color="#BBC8B9" />
      <ChartItem text="Beweglichkeit" color="#D2DDD0" />
    </ItemsWrapper>
  );
}

export default ChartItems;
