import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const PlayerNameInput = ({
  playerName,
  handleChangePlayerName,
}) => (
  <TextField
    autoFocus
    id="player-name-input"
    label="Enter Player name"
    variant="outlined"
    value={playerName}
    onChange={(e) => handleChangePlayerName(e.target.value)}
  />
);

PlayerNameInput.propTypes = {
  playerName: PropTypes.string.isRequired,
  handleChangePlayerName: PropTypes.func.isRequired,
};

export default PlayerNameInput;
