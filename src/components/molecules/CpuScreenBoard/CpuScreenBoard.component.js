import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { cpuPositions, cpuUpdatePositions, cpuShipSelected } from '../../../store/slices/CPU/CPUShipsPositions';
import Board from "../../atoms/Board/Board.component";

const CpuScreenBoard = ({}) => {
  const board = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuBoard);
  const cpuStart = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuStartGame);
  const ships = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.ships);
  const shipsArray = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuPositions);
  const totalShipsSelected = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.shipsSelected);

  const dispatch = useDispatch();
  console.log('shipsArray state => ',shipsArray);
  console.log('last ship array => ',shipsArray[shipsArray.length - 1]);
  const lastShipSelected = shipsArray[shipsArray.length - 1];

  const handlerShip = ({squareId}) => {
    
  };

  const getShip = () => {
      if(totalShipsSelected < 6) {
        console.log('IN getShip !!!!');
      let shipSelected = Math.floor(Math.random() * (6 - 0)) + 0;
      console.log('ship random => ',ships[shipSelected]);
      dispatch(cpuPositions(ships[shipSelected]));
      let squareSelected = Math.floor(Math.random() * (100 - 0 ) + 0);
      putShipInBoard(squareSelected);
      dispatch(cpuShipSelected(1));
    }
  };

  const putShipInBoard = (squareSelected) => {
    const finishPosition = [squareSelected];
    let initialPosition = squareSelected;

    console.log('LAST SELECTED SHIP => ',lastShipSelected);

    Array.from(Array(lastShipSelected?.spaces-1)).forEach((i, index) => {
      lastShipSelected?.vertical ? initialPosition = initialPosition +10 : initialPosition += 1;  
      finishPosition.push(initialPosition)
    });
    if(!lastShipSelected?.vertical) {
      if(lastShipSelected?.spaces === 4 && (
        (finishPosition[3] +1)%10 === 1) || (finishPosition[3] +1)%10 === 2 || (finishPosition[3] +1)%10 === 3) {
          return
        }
      if(lastShipSelected?.spaces === 3 && ((finishPosition[2] +1)%10 === 1 || (finishPosition[2] +1)%10 === 2)) {
        return
      }
      if(lastShipSelected?.spaces === 2 && ((finishPosition[0] +1)%10 === 0)) {
        return 
      }
    }
    dispatch(cpuUpdatePositions({index: shipsArray.length -1, position:  finishPosition}));
  };

  useEffect(() => {
    if(cpuStart) {
      getShip();
    }
  },[cpuStart,totalShipsSelected]);

  return (
    <Board handlerClick={handlerShip} squares={board} />
  )
};

export default CpuScreenBoard;