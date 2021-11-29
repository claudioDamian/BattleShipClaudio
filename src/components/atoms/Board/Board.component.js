import React from "react";
import PropTypes from 'prop-types';
import { SquaresContainer, Square } from "./Board.styled";

const Board = ({handlerClick, disable, squares}) => {

  return (
    <SquaresContainer disable={disable} >
      {squares.map((item) => {
        return <Square data-testid="square" color={item.color} key={item.squareId} onClick={() => handlerClick(item)} />
      })}
    </SquaresContainer>
  )
  
};
Board.propTypes = {
  handlerClick: PropTypes.func,
  squares: PropTypes.array,
}
export default Board;