import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shipsPositioned, verticalPosition, setPlayerName } from '../../../store/slices/Player/ShipsPositions';
import { cpuStartGame } from '../../../store/slices/CPU/CPUShipsPositions';
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

  return (
    <PlayerBoardWrapper>
      <ScreenBoard />
      {showCpuBoard && <CpuScreenBoard />}
      {total > 14 && !showCpuBoard && <ScreenStart handlerClickButton={handlerClickButton} handlerInputText={handlerInputText} />}
      {total < 15 && <ScreenCards cardHandlerClick={(value) => handlerCard(value)} checkBoxValue={getCheckBoxValue} disable={positions}/>}
    </PlayerBoardWrapper>
  )
};

export default PlayerBoard