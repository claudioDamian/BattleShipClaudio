import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPlayerShips,
  getPlayerBoard,
} from 'store/selectors';
import {
  toggleShipDirection,
  placeShip,
  unplaceShip,
  startGame,
} from 'store/actions';
import {
  canPlaceShipbyId,
  getUnplacedShipAndSpaces,
  createComputer,
} from 'utils/helpers';
import {
  EMPTY_SPACE,
} from 'utils/constants';
import StartScreen from 'views/StartScreen';

const StartScreenContainer = ({ compact }) => {
  const dispatch = useDispatch();
  const ships = useSelector((state) => getPlayerShips(state));
  const board = useSelector((state) => getPlayerBoard(state));

  const [playerName, setPlayerName] = useState('');
  const [shipSelectedId, setShipSelected] = useState(undefined);

  const shipsUnplaced = ships.filter((ship) => !ship.spacesAssigned.length);
  const startGameEnabled = !shipsUnplaced.length && !!playerName;

  const handleChangePlayerName = (name) => setPlayerName(name);
  const handleToggleShipDirection = (shipId) => dispatch(toggleShipDirection(shipId));
  const handleChangeShipSelected = (shipId) => setShipSelected(shipId);

  const handlePlaceShip = (spaceSelectedCoordinates) => {
    const { canPlace, spacesCoordinates } = (
      canPlaceShipbyId(board, ships, spaceSelectedCoordinates, shipSelectedId));
    if (canPlace) {
      dispatch(placeShip(shipSelectedId, spacesCoordinates));
      setShipSelected(undefined);
    }
  };
  const handleUnplaceShip = (spaceSelectedCoordinates) => {
    const { shipId, spacesCoordinates } = getUnplacedShipAndSpaces(ships, spaceSelectedCoordinates);
    dispatch(unplaceShip(shipId, spacesCoordinates));
  };

  const handleBoardClick = (space) => (
    space.status === EMPTY_SPACE
      ? (shipSelectedId !== undefined) && handlePlaceShip({ i: space.i, j: space.j })
      : handleUnplaceShip({ i: space.i, j: space.j })
  );

  const handleStartGame = () => {
    const { computerBoard, computerShips } = createComputer();
    const computer = { board: computerBoard, ships: computerShips };
    return dispatch(startGame(playerName, computer));
  };

  return (
    <StartScreen
      playerName={playerName}
      board={board}
      shipsUnplaced={shipsUnplaced}
      shipSelectedId={shipSelectedId}
      startGameEnabled={startGameEnabled}
      handleChangePlayerName={handleChangePlayerName}
      handleToggleShipDirection={handleToggleShipDirection}
      handleBoardClick={handleBoardClick}
      handleChangeShipSelected={handleChangeShipSelected}
      handleStartGame={handleStartGame}
      compact={compact}
    />
  );
};

StartScreenContainer.propTypes = {
  compact: PropTypes.bool,
};

StartScreenContainer.defaultProps = {
  compact: false,
};

export default StartScreenContainer;
