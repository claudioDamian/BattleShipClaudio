import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  gamePropTypes,
  playerPropTypes,
  computerPropTypes,
} from 'utils/propTypesConstants';
import Layout from 'components/Layout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Board from 'components/Board';
import StatusBar from 'components/StatusBar';
import ShipsStatus from 'components/ShipsStatus';

import {
  initialTurnMessage,
  generateAttemptFeedback,
  generateTurnMessage,
  computerNameMessage,
} from 'utils/messages';
import './styles.scss';

const GameScreen = ({
  game,
  player,
  computer,
  handleBoardClick,
  handleSurrender,
  compact,
}) => {
  const {
    playerAttemptFeedback,
    computerAttemptFeedback,
    turn,
  } = game;
  return (
    <Layout
      className={cn(
        'game-screen',
        { 'game-screen--compact': compact },
      )}
      compact={compact}
    >
      <Grid container>
        <Grid
          className="game-screen__block-1"
          item
          xs={12}
          md={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h6" gutterBottom>
            {player.name}
          </Typography>
          <Board
            className="game-screen__board"
            board={player.board}
          />
          <ShipsStatus
            ships={player.ships}
            compact={compact}
          />
        </Grid>
        <Grid
          className="game-screen__block-2"
          item
          xs={12}
          md={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h6" gutterBottom>
            {computerNameMessage}
          </Typography>
          <Board
            className="game-screen__board"
            computerBoard
            board={computer.board}
            handleBoardClick={handleBoardClick}
          />
          <ShipsStatus
            ships={computer.ships}
            compact={compact}
          />
        </Grid>
        <Grid
          className="game-screen__block-3"
          item
          xs={12}
        >
          <StatusBar
            turnMessage={generateTurnMessage(turn - 1)}
            playerAttemptFeedbackMessage={
              turn === 1
                ? initialTurnMessage
                : generateAttemptFeedback(playerAttemptFeedback, player.name)
            }
            computerAttemptFeedbackMessage={
              generateAttemptFeedback(computerAttemptFeedback, computerNameMessage)
            }
            handleSurrender={handleSurrender}
            compact={compact}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

GameScreen.propTypes = {
  game: gamePropTypes.isRequired,
  player: playerPropTypes.isRequired,
  computer: computerPropTypes.isRequired,
  handleBoardClick: PropTypes.func.isRequired,
  handleSurrender: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

GameScreen.defaultProps = {
  compact: false,
};

export default GameScreen;
