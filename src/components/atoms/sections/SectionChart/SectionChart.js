import React from 'react';
import Figpie from './assets/img--Figpie.png';
import { Partitions, Wrapper } from './SectionChartElements';
import Chart from './ChartItems';

function SectionChart() {
  return (
    <Partitions>
      <h3>So ist das Programm aufgeteilt:</h3>
      <Wrapper>
        <img src={Figpie} alt="Tortendiagramm" />
        <Chart />
      </Wrapper>
    </Partitions>
  );
}

export default SectionChart;
