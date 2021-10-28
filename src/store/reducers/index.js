import { combineReducers } from 'redux';
import game from './game';
import player from './player';
import computer from './computer';

export default combineReducers({
  game,
  player,
  computer,
});
