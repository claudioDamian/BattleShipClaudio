import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shipsPositioned } from '../../../store/slices/Player/ShipsPositions';
import { PlayerBoardWrapper } from './PlayerBoard.styled';
import ScreenBoard from '../../molecules/ScreenBoard/ScreenBoard.component';
import ScreenCards from '../../molecules/ScreenCards/ScreenCards.components';
import ScreenStart from '../../molecules/ScreenStart/ScreenStart.component';

export const PlayerBoard = () => {
  const positions = useSelector((state) => state.playerShipsPositionsStore.shipsPositions);
  const dispatch = useDispatch();
  console.log('SHIPS POSITION => ',positions);
  const handlerCard = ship => {
    console.log('SHIP SELECTED => ',ship);
    dispatch(shipsPositioned(ship));
  };

  return (
    <PlayerBoardWrapper>
      <ScreenBoard />
      {/* <ScreenStart /> */}
      <ScreenCards cardHandlerClick={(value) => handlerCard(value)} />
    </PlayerBoardWrapper>
  )
};

export default PlayerBoard