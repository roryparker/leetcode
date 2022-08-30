/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const isEmpty = (i, j) => grid[i][j] === 0;
  const isFresh = (i, j) => grid[i][j] === 1;
  const isRotten = (i, j) => grid[i][j] === 2;
  const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n;

  const rotten = [];
  let freshCount = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isRotten(i, j)) {
        rotten.push([i, j]);
      } else if (isFresh(i, j)) {
        freshCount++;
      }
    }
  }

  const spread = () => {
    const length = rotten.length;
    for (let k = 0; k < length; k++) {
      const coordinate = rotten.shift();
      for ([di, dj] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const i = coordinate[0] + di;
        const j = coordinate[1] + dj;
        if (isValid(i, j) && !isEmpty(i, j) && !isRotten(i, j)) {
          grid[i][j] = 2;
          rotten.push([i, j]);
          freshCount--;
        }
      }
    }
  };

  let count = 0;
  while (rotten.length && freshCount > 0) {
    spread();
    count++;
  }

  return freshCount ? -1 : count;
};