import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '@material-ui/core/Button';

import './styles.scss';

const ButtonCta = ({
  handleClick,
  disabled,
  text,
  compact,
}) => (
  <div
    className={cn(
      'button-cta',
      { 'button-cta--compact': compact },
    )}
  >
    <Button
      className="button-cta__button"
      variant="contained"
      fullWidth
      size={compact ? 'medium' : 'large'}
      color="primary"
      disabled={disabled}
      onClick={() => handleClick()}
    >
      {text}
    </Button>
  </div>
);

ButtonCta.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};

ButtonCta.defaultProps = {
  disabled: false,
  compact: false,
};

export default ButtonCta;
