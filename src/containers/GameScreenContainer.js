import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  getGame,
  getPlayer,
  getComputer,
} from 'store/selectors';
import {
  surrender,
  endGame,
  playerMissileLaunch,
  computerMissileLaunch,
} from 'store/actions';
import {
  launchPlayerMissile,
  launchComputerMissile,
  shipsAnySpaceLeft,
} from 'utils/helpers';
import {
  COMPUTER,
  PLAYER_WON,
  PLAYER_LOST,
  GAME_SCREEN,
  EMPTY_SPACE,
  OK_SHIP_SPACE,
} from 'utils/constants';
import GameScreen from 'views/GameScreen';

const GameScreenContainer = ({ compact }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => getGame(state));
  const player = useSelector((state) => getPlayer(state));
  const computer = useSelector((state) => getComputer(state));

  useEffect(() => {
    if (game.activeScreen === GAME_SCREEN && !shipsAnySpaceLeft(computer.ships)) {
      dispatch(endGame(PLAYER_WON));
    }
    if (game.activeScreen === GAME_SCREEN && !shipsAnySpaceLeft(player.ships)) {
      dispatch(endGame(PLAYER_LOST));
    }

    if (game.activePlayer === COMPUTER && shipsAnySpaceLeft(computer.ships)) {
      const {
        newBoard,
        newShips,
        attemptFeedback,
        newTargetedCoordinates,
        newAttackBoard,
        newAttackShips,
      } = launchComputerMissile(
        player.board,
        player.ships,
        computer.targetedCoordinates,
        computer.attackBoard,
        computer.attackShips,
      );
      dispatch(computerMissileLaunch(
        newBoard,
        newShips,
        attemptFeedback,
        newTargetedCoordinates,
        newAttackBoard,
        newAttackShips,
      ));
    }
  }, [
    computer,
    player,
    game.activePlayer,
    game.activeScreen,
    dispatch,
  ]);

  const handlePlayerMissileAttack = (spaceCoordinates) => {
    const { newBoard, newShips, attemptFeedback } = launchPlayerMissile(
      computer.board,
      computer.ships,
      spaceCoordinates,
    );
    dispatch(playerMissileLaunch(newBoard, newShips, attemptFeedback));
  };
  const handleSurrender = () => dispatch(surrender(game.turn));

  const handleBoardClick = (space, computerBoard) => {
    if (
      computerBoard
      && (space.status === EMPTY_SPACE || space.status === OK_SHIP_SPACE)
    ) {
      return handlePlayerMissileAttack({ i: space.i, j: space.j });
    }
    return null;
  };

  return (
    <GameScreen
      game={game}
      player={player}
      computer={computer}
      handleBoardClick={handleBoardClick}
      handleSurrender={handleSurrender}
      compact={compact}
    />
  );
};

GameScreenContainer.propTypes = {
  compact: PropTypes.bool,
};

GameScreenContainer.defaultProps = {
  compact: false,
};

export default GameScreenContainer;
