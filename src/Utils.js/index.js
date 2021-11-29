export const getSquareId = () => {
  return Math.floor(Math.random() * 100);
};

export const getCpuShip = () => {
  return Math.floor(Math.random() * (5 - 0)) + 0
};

export const getSquaresIntoRange = (squaresArray) => {
  return squaresArray.filter(s => !(s.key < 0 || s.key > 99))
};