import { configureStore } from '@reduxjs/toolkit';
import cpuStateReducer from './slices/CPU/index';
import playerStateReducer from './slices/Player/index';

export default configureStore({
  reducer: {
    cpuStore: cpuStateReducer,
    playerStore: playerStateReducer,
  },
})