import {
  CARRIER,
  CRUISER,
  SUBMARINE,
  SHIP_OK,
  SHIP_HORIZONTAL,
} from 'utils/constants';

import carrierImg from 'assets/carrier.png';
import cruiserImg from 'assets/cruiser.png';
import submarineImg from 'assets/submarine.png';

export const submarineInitialSetting = {
  type: SUBMARINE,
  direction: SHIP_HORIZONTAL,
  spacesLeft: 2,
  spacesAssigned: [],
  status: SHIP_OK,
  asset: submarineImg,
};
export const cruiserInitialSetting = {
  type: CRUISER,
  direction: SHIP_HORIZONTAL,
  spacesLeft: 3,
  spacesAssigned: [],
  status: SHIP_OK,
  asset: cruiserImg,
};
export const carrierInitialSetting = {
  type: CARRIER,
  direction: SHIP_HORIZONTAL,
  spacesLeft: 4,
  spacesAssigned: [],
  status: SHIP_OK,
  asset: carrierImg,
};
