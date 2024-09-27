const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;

  function markIsland(i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 'L') return;
    
    grid[i][j] = 'W';
    [[i-1, j], [i+1, j], [i, j-1], [i, j+1]].forEach(([x, y]) => markIsland(x, y));
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'L') {
        islandCount++;
        markIsland(i, j);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;