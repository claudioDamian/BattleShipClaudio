import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector } from 'react-redux';
import { getActiveScreen } from 'store/selectors';
import {
  START_SCREEN,
  GAME_SCREEN,
  END_GAME_SCREEN,
} from 'utils/constants';
import StartScreenContainer from 'containers/StartScreenContainer';
import GameScreenContainer from 'containers/GameScreenContainer';
import EndGameScreenContainer from 'containers/EndGameScreenContainer';

const BattleshipApp = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2e93cf',
      },
    },
  });
  const activeScreen = useSelector((state) => getActiveScreen(state));
  const compact = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { activeScreen === START_SCREEN && <StartScreenContainer compact={compact} /> }
      { activeScreen === GAME_SCREEN && <GameScreenContainer compact={compact} /> }
      { activeScreen === END_GAME_SCREEN && <EndGameScreenContainer compact={compact} /> }
    </ThemeProvider>
  );
};

export default BattleshipApp;
