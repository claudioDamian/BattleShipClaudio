import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getSquareId } from '../../../Utils.js';
import { cpuPositions, cpuUpdatePositions, cpuShipSelected } from '../../../store/slices/CPU/CPUShipsPositions';
import Board from "../../atoms/Board/Board.component";

const CpuScreenBoard = ({ getShip }) => {
  const board = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuBoard);
  const cpuStart = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuStartGame);
  const ships = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.ships);
  const shipsArray = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuPositions);
  const totalShipsSelected = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.shipsSelected);
  const cpuSquareId = useSelector((state) => state.cpuShipsPositionsStore.cpuShipsPositions.cpuSquareId);

  const dispatch = useDispatch();
  console.log('shipsArray state => ',shipsArray);
  const lastShipSelected = shipsArray[shipsArray.length - 1];
  

  const getNewSquareId = () => {
    let id = getSquareId();
    putShipInBoard(id);
  };

  const findSameId = (arrayPositions) => {
    let idFound = shipsArray.length && shipsArray.map(s => s.positions?.every(p => {
      return arrayPositions?.includes(p)
      })
    ).find( f => f === true);
    console.log('ID FOUND !!! ===>>> ',idFound);
    if(idFound) getNewSquareId(); 
  }
  const putShipInBoard = (squareSelected) => {

    const finishPosition = [squareSelected];
    let initialPosition = squareSelected;

    Array.from(Array(lastShipSelected?.spaces-1)).forEach((i, index) => {
      lastShipSelected?.vertical ? initialPosition = initialPosition +10 : initialPosition += 1;
      finishPosition.push(initialPosition)
    });
    console.log('finish positons => ', finishPosition);
    // hacer lògica para que no supere los 99 squares en horizontal
    findSameId(finishPosition);

    if(!lastShipSelected?.vertical) {
      if(lastShipSelected?.spaces === 4 && (
        (finishPosition[3] +1)%10 === 1) || (finishPosition[3] +1)%10 === 2 || (finishPosition[3] +1)%10 === 3) {
          console.log('INTO SPACES 4 ');
          getNewSquareId();
          return
        }
      if(lastShipSelected?.spaces === 3 && ((finishPosition[2] +1)%10 === 1 || (finishPosition[2] +1)%10 === 2)) {
        console.log('INTO SPACES 3 ');
        getNewSquareId();
        return
      }
      if(lastShipSelected?.spaces === 2 && ((finishPosition[0] +1)%10 === 0)) {
        console.log('INTO SPACES 2 ');
        getNewSquareId();
        return
      }
    }

    dispatch(cpuUpdatePositions({index: shipsArray.length -1, position:  finishPosition}));
  };

  useEffect(() => {
    if(cpuSquareId) putShipInBoard(cpuSquareId);
  },[cpuSquareId]);

  useEffect(() => {
    if(cpuStart) {
      getShip();
    }
  },[cpuStart,shipsArray]);

  return (
    <Board squares={board} />
  )
};

export default CpuScreenBoard;