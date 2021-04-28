import React from 'react';
import Test from '../../organisms/TestComponent/TestComponent.js';
import GlobalStyle from '../../../themes/globalStyles';

function Browse() {
  return (
    <div className="Browse">
      <GlobalStyle />
      <Test />
      <h1>Browse</h1>
    </div>
  );
}

export default Browse;
