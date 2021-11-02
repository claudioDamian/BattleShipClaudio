import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  shipsPositionsReducer,
  updateShipPosition,
  updateBoard,
} from '../../../store/slices/Player/ShipsPositions';
import Board from "../../atoms/Board/Board.component";

const ScreenBoard = ({}) => {
  const board = useSelector((state) => state.playerShipsPositionsStore.shipsPositions.board);
  const shipsPositions = useSelector((state) => state.playerShipsPositionsStore.shipsPositions.ships);
  const shipsCount = useSelector((state) => state.playerShipsPositionsStore.shipsPositions.totalShips);
  const shipsInSquares = useSelector((state) => state.playerShipsPositionsStore.shipsPositions);
  const lastSelectedShip = shipsPositions[shipsPositions.length - 1];
  const dispatch = useDispatch();

  const handlerShip = ({squareId}) => {
    const finishPosition = [squareId];
    let initialPosition = squareId;
    Array.from(Array(lastSelectedShip.spaces-1)).forEach((i, index) => {
      lastSelectedShip.vertical ? initialPosition = initialPosition +10 : initialPosition += 1;  
      finishPosition.push(initialPosition)
    });

    if(!lastSelectedShip.vertical) {
      if(lastSelectedShip.spaces === 4 && (
        (finishPosition[3] +1)%10 === 1) || (finishPosition[3] +1)%10 === 2 || (finishPosition[3] +1)%10 === 3) {
          return
      }
      if(lastSelectedShip.spaces === 3 && ((finishPosition[2] +1)%10 === 1 || (finishPosition[2] +1)%10 === 2)) {
        return
      }
      if(lastSelectedShip.spaces === 2 && ((finishPosition[0] +1)%10 === 0)) {
        return 
      }
    }
    if(lastSelectedShip.vertical) {
      const flagfound = finishPosition.find(e => e > 99)
      if(flagfound) return
    }
    dispatch(updateShipPosition({index: shipsPositions.length -1, position: finishPosition }));
  };

  const changeSquareColor = () => {
    if(shipsPositions.length) {
      const { position } = shipsPositions[shipsPositions.length -1];
      if(position?.length){
        position?.map(p => {
        dispatch(updateBoard({...board[p], color: 'black'}));
        })
      }
      return
    }
   };
  useEffect(() => {
    changeSquareColor();
  },[shipsPositions]);

  return (
    <Board handlerClick={handlerShip} squares={board} /> 
  );
};

export default ScreenBoard;