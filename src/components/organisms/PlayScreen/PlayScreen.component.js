import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  playerShipsPositioned,
  playerVerticalPosition,
  setPlayerName,
  playerInitState
} from '../../../store/slices/Player';
import {
  cpuShipsPositions,
  cpuSquareId,
  cpuShipSelected,
  cpuStartGame,
  cpuRemoveShip,
  cpuInitState,
  cpuWin,
} from '../../../store/slices/CPU';
import { getSquareId } from '../../../Utils.js/index';
import { PlayScreenWrapper, Wrapper } from './PlayScreen.styled';
import PlayerScreenBoard from '../../molecules/PlayerScreenBoard/PlayerScreenBoard.component';
import ScreenCards from '../../molecules/ScreenCards/ScreenCards.components';
import ScreenStart from '../../molecules/ScreenStart/ScreenStart.component';
import CpuScreenBoard from '../../molecules/CpuScreenBoard/CpuScreenBoard.component';
import TurnNameCard from '../../molecules/TurnNameCard/TurnNameCard.component';
import WinnerMessage from '../../molecules/WinnerMessage/WinnerMessage';
import Button from '../../atoms/Button/Button.component';

export const PlayScreen = () => {
  const dispatch = useDispatch();

  const cpuIsTheWin = useSelector((state) => state.cpuStore.cpuState.cpuWin);
  const cpuStartToPlay = useSelector((state) => state.cpuStore.cpuState.cpuStartGame);
  const cpuTotalShips = useSelector((state) => state.cpuStore.cpuState.shipsSelected);
  const cpuShips = useSelector((state) => state.cpuStore.cpuState.ships);
  
  const playerShips = useSelector((state) => state.playerStore.playerState.ships);
  const playerTotalShips = useSelector((state) => state.playerStore.playerState.totalShips);
  const isPlayerTurn = useSelector((state) => state.playerStore.playerState.playerTurn);
  const playerName = useSelector((state) => state.playerStore.playerState.playerName);
  const playerWin = useSelector((state) => state.playerStore.playerState.playerWin);

  const handlerCard = ship => {
    dispatch(playerShipsPositioned(ship));
  };

  const handlerStartGame = () => {
    dispatch(cpuStartGame(true));
  };

  const handlerInputText = playerName => {
    dispatch(setPlayerName(playerName));
  };

  const getCheckBoxValue = e => {
    playerShips.length && dispatch(playerVerticalPosition(
      {index: playerShips.length - 1, vertical: e.target.checked}
    ));
  };

  const prepareNewGame = () => {
    dispatch(cpuInitState());
    dispatch(playerInitState());
  }

  const playerSurrender = () => {
    dispatch(cpuWin(true));
  };

  /**
   * @property {function} getShip - callback function, position the CPU'ship in the board and
   * if vertical or not
   */
  const getShip = () => {
    if(cpuTotalShips < 5) {
      let shipRandom = Math.floor(Math.random() * cpuShips.length);
      let isVertical = Math.random() < 0.5;
      dispatch(cpuShipsPositions({...cpuShips[shipRandom], vertical: isVertical}));
      dispatch(cpuRemoveShip(shipRandom))
      dispatch(cpuSquareId(getSquareId()));
      dispatch(cpuShipSelected(1));
    }
  };

  if(!cpuIsTheWin && !playerWin) {
    return (
      <>
      <PlayScreenWrapper>
        <PlayerScreenBoard />
        {cpuStartToPlay && <CpuScreenBoard  getShip={getShip} />}
        {playerTotalShips > 14 && !cpuStartToPlay && <ScreenStart handlerClickButton={handlerStartGame} handlerInputText={handlerInputText} />}
        {playerTotalShips < 15 && <ScreenCards cardHandlerClick={(value) => handlerCard(value)} checkBoxValue={getCheckBoxValue} />}
      </PlayScreenWrapper>
      <>
        {cpuStartToPlay && (
        <Wrapper>
          <Button handlerClick={playerSurrender} label="Surrender" />
          <TurnNameCard title='Is turn of ' name={isPlayerTurn ? playerName : 'CPU'} />
        </Wrapper>
        )}
      </>
      </>
    )
  }
  else {
    return (
      <WinnerMessage message={`THE WINNER IS ${cpuIsTheWin ? 'THE CPU': playerName}!`} handlerClickPlayAgain={prepareNewGame}/>
    )
  }
};

export default PlayScreen