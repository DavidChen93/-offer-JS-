/**
题目：
在一个m*n的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于0）。
你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格，直到到达棋盘的右下角。
要求：
给定一个棋盘及其上面的礼物，请计算你最多能拿到多少价值的礼物？
*/

/**
其实就是背包问题的变形，也是采用动态规划的方式。
假设f(i,j)表示在坐标（i,j）处礼物之和的最大值。
那么如果它只能从左侧或者上侧过来的，所以只需要判断max[f(i-1, j), f(i, j-1)]，
即f(i, j) = value(i, j) + max[f(i-1, j), f(i, j-1)];
*/
//题目给了m*n这个条件，函数参数可以使用
function getMaxValue(valueMatrix, m, n) {
    //也可以使用二维数组保存，是一样的，只是内存地址上的区别
    let help = new Array(m*n);
    for(let row = 0; row < m; ++row) {
        for(let col = 0; col < n; ++col) {
            let left = 0,
                top = 0;
            if(row > 0) {
                top = help[(row - 1) * m + col];
            }
            
            if(col > 0) {
                left = help[row * m + col - 1];
            }
            help[row * m + col] = valueMatrix[row][col] + Math.max(left, top);
        }
    }
    console.log(help);
    return help[m*n - 1];
}

let value = [
    [1, 10, 3, 8],
    [12, 2, 9, 6],
    [5, 7, 4, 11],
    [3, 7, 16, 5]
];

console.log(getMaxValue(value, 4, 4));