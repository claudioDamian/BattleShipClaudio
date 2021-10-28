import React from "react";
import { SquaresContainer, Square } from "./Board.styled";

const Board = ({ handlerClick, squaresNumber }) => {
  const squares = Array.from(Array(squaresNumber)).map((i, index) => (
    {
      key: index,
      spaces: null,
      code: null,
      color: 'white',
      squareId: index+1,
    }
  ));
  console.log('squares => ', squares[0]);
  return (
    <SquaresContainer>
      {squares.map((item) => {
        return <Square color={item.color} key={item.index+1} onClick={() => handlerClick(item)} />
      })}
    </SquaresContainer>
  )
}
export default Board;