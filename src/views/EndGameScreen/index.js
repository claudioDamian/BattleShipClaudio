import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Layout from 'components/Layout';
import ButtonCta from 'components/ButtonCta';
import { gameResultPropTypes } from 'utils/propTypesConstants';
import { PLAYER_WON } from 'utils/constants';
import {
  correspondingGameResultImageTitle,
  generateGameResultMessage,
  restartGameMessage,
} from 'utils/messages';
import winImg from 'assets/win.png';
import loseImg from 'assets/lose.png';
import './styles.scss';

const EndGameScreen = ({
  result,
  turn,
  handleRestartGame,
  compact,
}) => (
  <Layout
    className="end-game-screen"
    compact={compact}
  >
    <div
      className="end-game-screen__container"
    >
      <img
        className="end-game-screen__image"
        src={result === PLAYER_WON ? winImg : loseImg}
        alt={correspondingGameResultImageTitle[result]}
        title={correspondingGameResultImageTitle[result]}
      />
      <Typography
        variant={compact ? 'h5' : 'h4'}
        align="center"
        gutterBottom
      >
        {generateGameResultMessage(result, turn - 1)}
      </Typography>
      <ButtonCta
        handleClick={handleRestartGame}
        text={restartGameMessage}
      />
    </div>
  </Layout>
);

EndGameScreen.propTypes = {
  result: gameResultPropTypes.isRequired,
  turn: PropTypes.number.isRequired,
  handleRestartGame: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

EndGameScreen.defaultProps = {
  compact: false,
};

export default EndGameScreen;
