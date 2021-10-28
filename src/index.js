import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

import Root from 'Root';
import BattleshipApp from 'BattleshipApp';

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <BattleshipApp />
    </Root>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

serviceWorker.register();
