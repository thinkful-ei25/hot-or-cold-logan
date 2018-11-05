import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import HotOrColdGame from './components/hotorcoldgame';

ReactDOM.render(
  <HotOrColdGame />,
  document.getElementById('root')
);
