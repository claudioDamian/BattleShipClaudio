import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonCta from 'components/ButtonCta';

import './styles.scss';

const StatusBar = ({
  turnMessage,
  playerAttemptFeedbackMessage,
  computerAttemptFeedbackMessage,
  handleSurrender,
  compact,
}) => (
  <Grid
    className={cn(
      'status-bar',
      { 'status-bar--compact': compact },
    )}
    container
  >
    <Grid
      className="status-bar__header"
      item
      xs={12}
    >
      <Typography variant={compact ? 'subtitle2' : 'h6'}>
        {turnMessage}
      </Typography>
    </Grid>
    <Grid
      className="status-bar__body"
      item
      xs
    >
      {playerAttemptFeedbackMessage && (
        <>
          <Typography variant={compact ? 'caption' : 'subtitle1'}>
            <b>{playerAttemptFeedbackMessage}</b>
          </Typography>
          {compact && <br />}
        </>
      )}
      {computerAttemptFeedbackMessage && (
        <Typography variant={compact ? 'caption' : 'subtitle1'}>
          <b>{computerAttemptFeedbackMessage}</b>
        </Typography>
      )}
    </Grid>
    <Grid
      className="status-bar__surrender"
      item
      xs={12}
      md={3}
    >
      <ButtonCta
        handleClick={handleSurrender}
        text="Surrender"
        compact={compact}
      />
    </Grid>
  </Grid>
);

StatusBar.propTypes = {
  turnMessage: PropTypes.string.isRequired,
  playerAttemptFeedbackMessage: PropTypes.string,
  computerAttemptFeedbackMessage: PropTypes.string,
  handleSurrender: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

StatusBar.defaultProps = {
  playerAttemptFeedbackMessage: undefined,
  computerAttemptFeedbackMessage: undefined,
  compact: false,
};

export default StatusBar;
