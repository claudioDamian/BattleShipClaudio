import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { SHIP_DESTROYED } from 'utils/constants';
import { shipPropTypes } from 'utils/propTypesConstants';

import './styles.scss';

const ShipsStatus = ({
  ships,
  compact,
}) => (
  <div
    className={cn(
      'ships-status',
      { 'ships-status--compact': compact },
    )}
  >
    {ships.map((ship) => (
      <img
        key={ship.id}
        className={ship.status !== SHIP_DESTROYED ? 'ships-status__ship-on' : 'ships-status__ship-off'}
        src={ship.asset}
        alt={ship.type}
        title={ship.type}
      />
    ))}
  </div>
);

ShipsStatus.propTypes = {
  ships: PropTypes.arrayOf(shipPropTypes),
  compact: PropTypes.bool,
};

ShipsStatus.defaultProps = {
  ships: [],
  compact: false,
};

export default ShipsStatus;
