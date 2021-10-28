import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { shipPropTypes } from 'utils/propTypesConstants';

import SelectableShip from './SelectableShip';
import './styles.scss';

const ShipsSelector = ({
  shipsUnplaced,
  handleToggleShipDirection,
  shipSelectedId,
  handleChangeShipSelected,
  compact,
}) => (
  <div
    className={cn(
      'ships-selector',
      { 'ships-selector--compact': compact },
    )}
  >
    {shipsUnplaced.sort((a, b) => b.spacesLeft - a.spacesLeft).map((ship) => (
      <SelectableShip
        key={ship.id}
        ship={ship}
        handleToggleShipDirection={handleToggleShipDirection}
        selected={!(shipSelectedId === undefined) && ship.id === shipSelectedId}
        handleChangeShipSelected={handleChangeShipSelected}
        compact={compact}
      />
    ))}
  </div>
);

ShipsSelector.propTypes = {
  shipsUnplaced: PropTypes.arrayOf(shipPropTypes).isRequired,
  handleToggleShipDirection: PropTypes.func.isRequired,
  shipSelectedId: PropTypes.number,
  handleChangeShipSelected: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

ShipsSelector.defaultProps = {
  shipSelectedId: undefined,
  compact: false,
};

export default ShipsSelector;
