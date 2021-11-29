import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  playerUpdateShipPosition,
  playerUpdateBoard,
} from '../../../store/slices/Player';
import Board from "../../atoms/Board/Board.component";

const ScreenBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector((state) => state.playerStore.playerState.board);
  const playerShipsPositions = useSelector((state) => state.playerStore.playerState.ships);
  const totalShips = useSelector((state) => state.playerStore.playerState.totalShips);
  const lastSelectedShip = playerShipsPositions.at(- 1);

  /**
   * @property {function} handlerShip - function to position the Player's ship on the board and 
   * validate if the ship is in the range into 0 and 99
   * @param {number} squareId - ID of the square selected by the Player 
   */
  const handlerShip = ({squareId}) => {
    if(playerShipsPositions.length) {
      const finishPosition = [squareId];
      let initialPosition = squareId;
  
      Array.from(Array(lastSelectedShip.spaces-1)).forEach(() => {
        lastSelectedShip.vertical ? initialPosition = initialPosition +10 : initialPosition += 1;  
        finishPosition.push(initialPosition)
      });
  
      if(!lastSelectedShip.vertical) {
        if((lastSelectedShip.spaces === 4) && (
          (finishPosition[3] +1)%10 === 1) || ((finishPosition[3] +1)%10 === 2) || (finishPosition[3] +1)%10 === 3) {
            return
        }
        if((lastSelectedShip.spaces === 3) && ((finishPosition[2] +1)%10 === 1 || (finishPosition[2] +1)%10 === 2)) {
          return
        }
        if((lastSelectedShip.spaces === 2) && ((finishPosition[0] +1)%10 === 0)) {
          return 
        }
      }
      if(lastSelectedShip.vertical) {
        const flagfound = finishPosition.find(e => e > 99)
        if(flagfound) return
      }
      dispatch(playerUpdateShipPosition({index: playerShipsPositions.length -1, position: finishPosition }));
    }
  };

  /**
   * @property {function} changeSquareColor - when the Player'ship pass the validation ranges all the
   * squares of the ship will painted in black
   */
  const changeSquareColor = () => {
    if(playerShipsPositions.length) {
      const { position } = playerShipsPositions.at(-1);
      if(position?.length){
        position?.map(p => {
        dispatch(playerUpdateBoard({...board[p], color: 'black'}));
        })
      }
      return
    }
   };
  useEffect(() => {
    if(totalShips < 15) changeSquareColor();
  },[playerShipsPositions]);

  return (
    <Board handlerClick={handlerShip} squares={board} />
  );
};

export default ScreenBoard;