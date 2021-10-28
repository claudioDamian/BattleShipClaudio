import { configureStore } from '@reduxjs/toolkit';
import cpuImpactOnWaterReducer from './slices/CPU/FailedShoots/index';
import cpuShipsImpactedReducer from './slices/CPU/ShipsImpacted/index';
import cpuDestroyedShipsReducer from './slices/CPU/DestroyedShips/index';
import playerShipsImpactedReducer from './slices/Player/ShipsImpacted/index';
import playerFailImpactsReducer from './slices/Player/FailImpacts/index';
import playerDestroyedShipsReducer from './slices/Player/DestroyedShips/index';
import playerShipsPositionsReducer from './slices/Player/ShipsPositions/index';

export default configureStore({
  reducer: {
    cpuShipImpactedsStore: cpuShipsImpactedReducer,
    cpuMissedStore: cpuImpactOnWaterReducer,
    cpuDestroyedShipsStore: cpuDestroyedShipsReducer,
    playerImpactShipsStore: playerShipsImpactedReducer,
    playerFailsStore: playerFailImpactsReducer,
    playerDestroyedShipsStore: playerDestroyedShipsReducer,
    playerShipsPositionsStore: playerShipsPositionsReducer,
  },
})