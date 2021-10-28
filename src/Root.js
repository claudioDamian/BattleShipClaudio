import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'store/reducers';

const Root = ({
  initialState,
  children,
}) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(),
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  initialState: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Root.defaultProps = {
  initialState: {},
};

export default Root;
