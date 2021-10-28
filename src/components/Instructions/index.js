import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

const Instructions = ({
  title,
  instructions,
  compact,
}) => (
  <div className="instructions">
    { title && (
      <Typography
        variant={compact ? 'h5' : 'h4'}
        component="h1"
        align="center"
        gutterBottom
      >
        {title}
      </Typography>
    )}
    { instructions && (
      <ul className="instructions__list">
        {instructions.map((instruction) => (
          <li
            key={instruction}
            className="instructions__list-item"
          >
            <Typography variant="subtitle1">
              {instruction}
            </Typography>
          </li>
        ))}
      </ul>
    )}
  </div>
);

Instructions.propTypes = {
  title: PropTypes.string,
  instructions: PropTypes.arrayOf(PropTypes.string),
  compact: PropTypes.bool,
};

Instructions.defaultProps = {
  title: undefined,
  instructions: undefined,
  compact: false,
};

export default Instructions;
