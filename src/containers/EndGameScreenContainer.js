import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  getGameResult,
  getGameTurn,
} from 'store/selectors';
import { restartGame } from 'store/actions';
import EndGameScreen from 'views/EndGameScreen';

const EndGameScreenContainer = ({ compact }) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => getGameResult(state));
  const turn = useSelector((state) => getGameTurn(state));

  const handleRestartGame = () => dispatch(restartGame());

  return (
    <EndGameScreen
      result={result}
      turn={turn}
      handleRestartGame={handleRestartGame}
      compact={compact}
    />
  );
};

EndGameScreenContainer.propTypes = {
  compact: PropTypes.bool,
};

EndGameScreenContainer.defaultProps = {
  compact: false,
};

export default EndGameScreenContainer;
