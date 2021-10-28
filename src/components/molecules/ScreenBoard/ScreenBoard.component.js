import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { shipsPositionsReducer } from '../../../store/slices/Player/ShipsPositions';
import Board from "../../atoms/Board/Board.component";

const ScreenBoard = () => {
  const positions = useSelector((state) => state.playerShipsPositionsStore.shipsPositions);
  const dispatch = useDispatch();
  const [ squareId, setSquareId ] = useState(null);
  console.log('store value ships positions => ', positions);

  const getPositions = () => {
    const horizontalNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const verticalNumbers = [];
    console.log('GET POSITONS ! ',squareId);
    if(squareId) {
      const lastOfTheRow = horizontalNumber.find(h => h === squareId.squareId)
      if(lastOfTheRow) {
        console.log('IS LAST OF THE ROW => ', squareId)
      }
    }
  }; //dispatch(shipsPositionsReducer(value))
  useEffect(() => {
    getPositions();
  }, [squareId]);
  return (
    <Board handlerClick={(value) => setSquareId(value)} squaresNumber={100} /> 
  );
};

export default ScreenBoard;