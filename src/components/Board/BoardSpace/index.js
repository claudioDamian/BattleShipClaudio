import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { boardSpacePropTypes } from 'utils/propTypesConstants';
import {
  EMPTY_SPACE,
  OK_SHIP_SPACE,
} from 'utils/constants';
import './styles.scss';

const BoardSpace = ({
  space,
  computerBoard,
  handleClick,
}) => {
  const inputProps = handleClick && {
    'aria-label': 'Select',
    role: 'button',
    tabIndex: 0,
    onClick: () => handleClick(space, computerBoard),
    onKeyPress: () => handleClick(space, computerBoard),
  };
  return (
    <div
      className={cn(
        'board-space',
        { [`board-space--${space.status}`]: !computerBoard || (computerBoard && space.status !== OK_SHIP_SPACE) },
        { [`board-space--${EMPTY_SPACE}`]: computerBoard && space.status === OK_SHIP_SPACE },
        { 'board-space--clickable': handleClick },
      )}
      {...(inputProps)}
    />
  );
};

BoardSpace.propTypes = {
  space: boardSpacePropTypes.isRequired,
  computerBoard: PropTypes.bool,
  handleClick: PropTypes.func,
};
BoardSpace.defaultProps = {
  computerBoard: false,
  handleClick: undefined,
};

export default BoardSpace;
