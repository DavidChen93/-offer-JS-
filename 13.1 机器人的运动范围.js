/**
题目：
地上有一格m行n列的方格。一个机器人从坐标(0,0)的格子开始移动，他每次可以向左、右、上、下移动一格，
但不能进入行坐标和列坐标的数位之和大于K的格子。
例如：
当k为18时，机器人能够进入方格(35, 37)，因为3+5+3+7 = 18。但不能进入方格(35, 38),因为3+5+3+8=19。
要求：
请问该机器人能够到达多少个格子？
*/

/*
思路：
机器人从坐标(0,0)开始移动。当它准备进入坐标为(i, j)的格子时，通过检查坐标的数位和来判断机器人是够能够进入。
如果机器人能够进入坐标为(i, j)的格子，则再判断它能否进入4个相邻的格子(i, j-1)、(i-1, j)、(i, j+1)、(i+1, j)
*/
function movingCount(threshold, rows, cols)
{
    // write code here
    if(rows<1 || cols<1 || threshold <0) {
        return 0;
    }

    let visitedFlag = new Array(rows*cols).fill(false);

    return movingCountCore(threshold, rows, cols, 0, 0, visitedFlag);
}

/**
 * 深度搜索算法
 * @param threshold 阈值
 * @param rows 矩阵的行数
 * @param cols 矩阵的列数
 * @param row 当前进入格子的行
 * @param col 当前进入格子的列
 * @param visitedFlag 标记矩阵，用于标记格子是否访问过
 * */
function movingCountCore(threshold, rows, cols, row, col, visitedFlag) {
    let count = 0;
    if(check(threshold, rows, cols, row, col, visitedFlag)){
        visitedFlag[row*cols+col] = true;
        count = 1 + movingCountCore(threshold,rows,cols,row-1,col,visitedFlag)
            + movingCountCore(threshold,rows,cols,row,col-1,visitedFlag)
            + movingCountCore(threshold,rows,cols,row+1,col,visitedFlag)
            + movingCountCore(threshold,rows,cols,row,col+1,visitedFlag);
    }
    return count;
}

//判断(row,col)格子是否能进入
function check(threshold, rows, cols, row, col, visitedFlag) {
    if(row>=0 && row<rows && col>=0 && col<cols && getDigitSum(row)+getDigitSum(col)<=threshold && !visitedFlag[row*cols+col]){
        return true;
    }
    return false;
}

//获取数字的数位之和
function getDigitSum(num) {
    let sum = 0;
    while(num > 0){
        sum += (num % 10);
        num = Math.floor(num/10);
    }
    return sum;
}


console.log(movingCount(18, 50, 50));