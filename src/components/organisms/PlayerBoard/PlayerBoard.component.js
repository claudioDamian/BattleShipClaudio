import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shipsPositioned, verticalPosition, setPlayerName } from '../../../store/slices/Player/ShipsPositions';
import {
  cpuPositions,
  cpuSquareId,
  cpuShipSelected,
  cpuUpdatePositions,
  cpuStartGame,
} from '../../../store/slices/CPU/CPUShipsPositions';
import { getSquareId } from '../../../Utils.js/index';
import { PlayerBoardWrapper } from './PlayerBoard.styled';
import ScreenBoard from '../../molecules/ScreenBoard/ScreenBoard.component';
import ScreenCards from '../../molecules/ScreenCards/ScreenCards.components';
import ScreenStart from '../../molecules/ScreenStart/ScreenStart.component';
import CpuScreenBoard from '../../molecules/CpuScreenBoard/CpuScreenBoard.component';

export const PlayerBoard = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.playerShipsPositionsStore.shipsPositions);
  const total = useSelector((state) => state.playerShipsPositionsStore.shipsPositions.totalShips);
  const showCpuBoard = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuStartGame);
  const ships = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.ships);
  const totalShipsSelected = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.shipsSelected);

  const handlerCard = ship => {
    dispatch(shipsPositioned(ship));
  };

  const handlerClickButton = () => {
    dispatch(cpuStartGame(true));
  };

  const handlerInputText = playerName => {
    dispatch(setPlayerName(playerName));
  };

  const getCheckBoxValue = e => {
    positions.ships.length && dispatch(verticalPosition(
      {index: positions.ships.length - 1, vertical: e.target.checked}
    ));
  };

  const getShip = () => {
    if(totalShipsSelected < 5) {
      let shipSelected = Math.floor(Math.random() * (5 - 0)) + 0;
      dispatch(cpuPositions(ships[shipSelected]));
      let squareSelected = getSquareId();
      console.log('square selected => ', squareSelected);
      dispatch(cpuSquareId(squareSelected));
      dispatch(cpuShipSelected(1));
    }
  };

  return (
    <PlayerBoardWrapper>
      <ScreenBoard />
      {showCpuBoard && <CpuScreenBoard  getShip={getShip} />}
      {total > 14 && !showCpuBoard && <ScreenStart handlerClickButton={handlerClickButton} handlerInputText={handlerInputText} />}
      {total < 15 && <ScreenCards cardHandlerClick={(value) => handlerCard(value)} checkBoxValue={getCheckBoxValue} disable={positions}/>}
    </PlayerBoardWrapper>
  )
};

export default PlayerBoard