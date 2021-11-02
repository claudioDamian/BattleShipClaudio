import React from "react";
import { SquaresContainer, Square } from "./Board.styled";

const Board = ({ handlerClick, squares }) => {

  return (
    <SquaresContainer>
      {squares.map((item) => {
        return <Square color={item.color} key={item.squareId} onClick={() => handlerClick(item)} />
      })}
    </SquaresContainer>
  )
}
export default Board;