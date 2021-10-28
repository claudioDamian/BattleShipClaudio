import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
} from 'utils/constants';
import {
  shipPropTypes,
} from 'utils/propTypesConstants';
import rotateIcon from 'assets/rotate.svg';
import {
  rotateShipMessage,
  generateSelectableShipTitle,
  generateSelectableShipSpacesMessage,
} from 'utils/messages';
import './styles.scss';

const SelectableShip = ({
  ship,
  handleToggleShipDirection,
  selected,
  handleChangeShipSelected,
  compact,
}) => (
  <Card
    className={cn(
      'selectable-ship',
      {
        [`selectable-ship--${SHIP_HORIZONTAL}`]: ship.direction === SHIP_HORIZONTAL,
        [`selectable-ship--${SHIP_VERTICAL}`]: ship.direction === SHIP_VERTICAL,
        'selectable-ship--selected': selected,
        'selectable-ship--compact': compact,
      },
    )}
    square
    role="button"
    tabIndex={0}
    onClick={() => handleChangeShipSelected(ship.id)}
    onKeyPress={() => handleChangeShipSelected(ship.id)}
  >
    <div
      className="selectable-ship__rotate"
      role="button"
      tabIndex={0}
      onClick={() => handleToggleShipDirection(ship.id)}
      onKeyPress={() => handleToggleShipDirection(ship.id)}
    >
      <img
        src={rotateIcon}
        alt={rotateShipMessage}
        title={rotateShipMessage}
      />
    </div>
    <CardActionArea>
      <CardMedia
        classes={{ img: 'selectable-ship__asset' }}
        component="img"
        alt={generateSelectableShipTitle(ship)}
        title={generateSelectableShipTitle(ship)}
        height={compact ? '30' : '50'}
        image={ship.asset}
      />
      <CardContent>
        <Typography
          className="selectable-ship__title"
          variant={compact ? 'subtitle1' : 'h5'}
        >
          {ship.type}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {generateSelectableShipSpacesMessage(ship)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

SelectableShip.propTypes = {
  ship: shipPropTypes.isRequired,
  handleToggleShipDirection: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  handleChangeShipSelected: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

SelectableShip.defaultProps = {
  selected: false,
  compact: false,
};

export default SelectableShip;
