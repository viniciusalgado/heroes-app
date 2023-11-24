import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RoutesWrapper from '../../routes/RoutesWrapper';

const App = () => {
  return (
    <BrowserRouter>
      <div id='app-main'>
        <RoutesWrapper/>
      </div>
    </BrowserRouter>
  );
};

export default App;
