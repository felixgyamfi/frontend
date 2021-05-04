import React from 'react';

function ChartItem() {
  return (
    <div>
      <div>Farbe</div>
      <p>Krafttraining</p>
    </div>
  );
}
function ChartItems() {
  return (
    <div>
      <ChartItem />
      <ChartItem />
      <ChartItem />
      <ChartItem />
    </div>
  );
}

export default ChartItems;
