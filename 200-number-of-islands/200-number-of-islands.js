/**
 * @param {character[][]} grid
 * @return {number}
 */
var callDfc = function(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return;
    }
    if (grid[i][j] === '0') return;
    
    grid[i][j] = "0";
    callDfc(grid, i+1, j);
    callDfc(grid, i-1, j);
    callDfc(grid, i, j+1);
    callDfc(grid, i, j-1);
    
}
var numIslands = function(grid) {
    if (!grid.length) {
        return 0;
    }
    var m = grid.length;
    var n = grid[0].length;
    var count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                callDfc(grid,i,j);
                count++;
            }
        }
    }
    return count;
};