import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getSquareId, getSquaresIntoRange } from '../../../Utils.js';
import {
  cpuUpdatePositions,
  cpuShots,
  cpuUpdateBoard,
  cpuImpacts,
  cpuShotTargetImpacted,
  cpuHitsShip,
  cpuAttack,
  cpuWin,
} from '../../../store/slices/CPU';
import {
  setPlayerImpacts,
  playerTurn,
  playerUpdateBoard,
  playerSetDestroyedShips,
  playerNumberOfImpacts,
  playerWin,
} from '../../../store/slices/Player';
import Board from "../../atoms/Board/Board.component";

/**
 * 
 * @property {function} getShip  - function callback to get the cpu ship
 */

const CpuScreenBoard = ({getShip}) => {
  const dispatch = useDispatch();

  const cpuBoard = useSelector((state) => state.cpuStore.cpuState.cpuBoard);
  const cpuStart = useSelector((state) => state.cpuStore.cpuState.cpuStartGame);
  const cpuShipsPositionsArray = useSelector((state) => state.cpuStore.cpuState.cpuShipsPositions);
  const cpuSquareId = useSelector((state) => state.cpuStore.cpuState.cpuSquareId);
  const cpuShotsArray = useSelector((state) => state.cpuStore.cpuState.cpuShots);
  const cpuTargetImpacted = useSelector((state) => state.cpuStore.cpuState.shotTargetImpacted);
  const cpuHitsShips = useSelector((state) => state.cpuStore.cpuState.cpuHitsShip);
  const cpuAttackShip = useSelector((state) => state.cpuStore.cpuState.cpuAttack);

  const playerBoard = useSelector((state) => state.playerStore.playerState.board);
  const playerShipsPositions = useSelector((state) => state.playerStore.playerState.ships);
  const isPlayerTurn = useSelector((state) => state.playerStore.playerState.playerTurn);
  const playerTargetImpacts = useSelector((state) => state.playerStore.playerState.playerNumberOfImpacts);

  const lastShipSelected = cpuShipsPositionsArray.at(-1);

  /**
   * 
   * @property {function} findSameId - function to know if a square was take by another ship 
   */
  const findSameId = (arrayPositions) => {
    let idFound = cpuShipsPositionsArray?.find(s => s.positions?.some(p => arrayPositions?.includes(p) === true));
    if(idFound) {
      return true
    }
    return false
  }

  /**
   * 
   * @property {function} validateHorizontalPosition - function to validate if the ship have
   * the position into the range (0 to 99)
   */
  const validateHorizontalPosition = (lastShipSelected, finishPosition) => {
    if(!lastShipSelected.vertical) {
      if(lastShipSelected?.spaces === 4 && (
        (finishPosition[3] +1)%10 === 1) || (finishPosition[3] +1)%10 === 2 || (finishPosition[3] +1)%10 === 3) {
          return true
        }
      if(lastShipSelected?.spaces === 3 && ((finishPosition[2] +1)%10 === 1 || (finishPosition[2] +1)%10 === 2)) {
        return true
      }
      if(lastShipSelected?.spaces === 2 && ((finishPosition[0] +1)%10 === 0)) {
        return true
      }
    }
    if(lastShipSelected.vertical) {
      const flagFound = finishPosition.find(f => f > 99);
      if(flagFound) return true
    }
    return false
  };

  /**
   * 
   * @property {function} putShipInTheBoard - function to position the ship in the board
   * @param {number} squareSelected  - id of the square selected
   */
  const putShipInTheBoard = (squareSelected) => {
    const finishPosition = [squareSelected];
    let initialPosition = squareSelected;

    Array.from(Array(lastShipSelected?.spaces-1)).forEach(() => {
      lastShipSelected?.vertical ? initialPosition = initialPosition +10 : initialPosition += 1;
      finishPosition.push(initialPosition)
    });

    if(cpuShipsPositionsArray.length && (findSameId(finishPosition) || validateHorizontalPosition(lastShipSelected, finishPosition))) {
        putShipInTheBoard(getSquareId());
    }
    else {
      dispatch(cpuUpdatePositions({index: cpuShipsPositionsArray.length -1, position:  finishPosition}));
    }
  };

  const changeSquareColor = (square, color) => {
    dispatch(playerUpdateBoard({...playerBoard[square], color}));
  };

  /**
   * @property {function} findDestroyedShipsOfPlayer - function to search if a ship of the player 
   * have the same array length inter impacts and position
   * if the length are equals, the position squares are painted to red color
   */
  const findDestroyedShipsOfPlayer = () => {
    playerShipsPositions.forEach(s => {
      if(s.position?.length === s.impacts?.length) {
        s.impacts?.forEach(i => {
          dispatch(playerSetDestroyedShips({squareId: playerBoard[i].squareId, color: 'red'}))
        })
      } 
    })
  };

  /**
   * @property {function} findDestroyerShipsOfCpu - function to search if a ship of the CPU 
   * have the same array length inter impacts and position
   * if the length are equals, the position squares are painted to red color
   */
  const findDestroyerShipsOfCpu = () => {
    cpuShipsPositionsArray.forEach(s => {
      if(s.positions?.length === s.impacts?.length) {
        s.impacts?.forEach(i => {
          dispatch(cpuUpdateBoard({index: i, color: 'red', disabled: true}))
        })
      }
    })
  };

  /**
   * @property {function} findPlayerShip - function to know if a shot of the CPU impact in some square
   * of a player's ship
   * @param {number} shotRandom 
   * @param {array} squearesWithoutImpact 
   * @returns {array}
   */
  const findPlayerShip = (shotRandom, squearesWithoutImpact) => {
    return playerShipsPositions.filter(s => s.position.indexOf(squearesWithoutImpact[shotRandom].squareId) !== -1); 
  };
  
  const getSquaresWithoutImpact = () => {
    dispatch(cpuAttack(false));
    dispatch(cpuHitsShip([]));
    const squearesWithoutImpact = playerBoard.filter(b => {
       return !cpuShotsArray?.some(s => {
        return b.key === s.key
      })
    });
    return squearesWithoutImpact
  };

  const cpuAttackMode = () => {
    const squaresToAttack = cpuHitsShips.filter(c => {
      return !cpuShotsArray?.some(s => {
        return c.key === s.key
      })
    });
    return squaresToAttack
  };

  const shot = () => {
    const squaresFree = cpuAttackShip && cpuAttackMode()?.length ? cpuAttackMode() : getSquaresWithoutImpact();
    const shotRandom = Math.floor(Math.random() * squaresFree.length);
    dispatch(cpuShots(squaresFree[shotRandom]));
    const playerShip = findPlayerShip(shotRandom, squaresFree);
    if(playerShip[0]?.code) {
      const squareId = squaresFree[shotRandom].squareId
      dispatch(setPlayerImpacts({code: playerShip[0]?.code, shot: squareId}));
      dispatch(cpuHitsShip(getSquaresIntoRange([
        {key: squareId +1, squareId: squareId +1},
        {key: squareId -1, squareId: squareId -1},
        {key: squareId +10, squareId: squareId +10},
        {key: squareId -10, squareId: squareId -10}
      ])));
      dispatch(cpuAttack(true));
      dispatch(cpuShotTargetImpacted(1));
      changeSquareColor(squaresFree[shotRandom].squareId, 'orange');
    } else {
      changeSquareColor(squaresFree[shotRandom].squareId, '#61C5FA');
    }
    dispatch(playerTurn(!isPlayerTurn))
  };

  /**
   * @property {function} cpuHandlerBoard - function to handler the player'shots and search if the shot
   * impact in some square of the CPU's ship
   * @param {number} squareId - ID of the squere selected by the Player 
   */
  const cpuHandlerBoard = ({squareId}) => {
    const impact = cpuShipsPositionsArray.filter(s => s.positions?.find(p => p === squareId));
    if(impact?.length) {
      dispatch(cpuImpacts({code: impact[0].code, shot: squareId}));
      dispatch(playerNumberOfImpacts(1));
      dispatch(cpuUpdateBoard({index: squareId, color: 'orange', disabled: true}));
    } else {
      dispatch(cpuUpdateBoard({index: squareId, color: '#61C5FA', disabled: true}));
    }
    dispatch(playerTurn(!isPlayerTurn));
  };

  useEffect(() => {
    findDestroyedShipsOfPlayer();
    if(cpuTargetImpacted > 14) dispatch(cpuWin(true))
  },[cpuTargetImpacted]);
  
  useEffect(() => {
    findDestroyerShipsOfCpu();
    if(playerTargetImpacts > 14) dispatch(playerWin(true))
  },[cpuShipsPositionsArray]);

  useEffect(() => {
    if(!isPlayerTurn && cpuShotsArray.length <= 99) shot();
  },[isPlayerTurn, cpuAttackShip]);

  useEffect(() => {
    if(cpuSquareId) putShipInTheBoard(cpuSquareId);
  },[cpuSquareId]);

  useEffect(() => {
    if(cpuStart) {
      getShip();
    }
  },[cpuStart,cpuSquareId]);

  return (
    <Board squares={cpuBoard} handlerClick={cpuHandlerBoard} />
    )
  };
  
  CpuScreenBoard.propTypes = {
    getShip: PropTypes.func
  }
export default CpuScreenBoard;