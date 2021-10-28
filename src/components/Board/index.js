import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { boardPropTypes } from 'utils/propTypesConstants';

import BoardSpace from './BoardSpace';
import './styles.scss';

const Board = ({
  computerBoard,
  board,
  handleBoardClick,
  className,
}) => (
  <div className={cn('board', className)}>
    {board.map((row) => (
      row.map((space) => (
        <BoardSpace
          key={`space-${space.i}${space.j}`}
          computerBoard={computerBoard}
          space={space}
          handleClick={handleBoardClick}
        />
      ))
    ))}
  </div>
);

Board.propTypes = {
  computerBoard: PropTypes.bool,
  board: boardPropTypes.isRequired,
  handleBoardClick: PropTypes.func,
  className: PropTypes.string,
};
Board.defaultProps = {
  computerBoard: false,
  handleBoardClick: null,
  className: '',
};

export default Board;
