/*
题目：
输入一个矩阵，按照从外向里的顺序依次打印出每一个数字
*/

function printMatrix(matrix) {
    let rows = matrix.length,
        cols = matrix[0].length;
    if(rows === 0 || cols === 0) {
        return new Error("错误");
    }
    let start = 0,
        result = [];
    //用于判断还能不能继续打印
    while(start*2 < rows && start*2 < cols) {
        printCore(matrix, rows, cols, start, result);
        ++start;
    }
    return result.join(",");
}

function printCore(matrix, rows, cols, start, result) {
    let endCol = cols - start - 1,
        endRow = rows - start - 1;
        
    //输出上面的一行，从左到右
    for(let i=start; i<=endCol; ++i) {
        result.push(matrix[start][i]);
    }
    
    //输出右边的一列，从上到下
    if(endRow > start) {
        for(let i=start+1; i<=endRow; ++i) {
            result.push(matrix[i][endCol]);
        }
    }
    
    //下面的一行，从右往左，必须保证有多余的行和列
    if(start < endCol && start < endRow) {
        for(let i=endCol-1; i>=start; --i) {
            result.push(matrix[endRow][i]);
        }
    }
    
    //左边的一列，从下往上，必须保证多余的行和列
    if(endRow - start > 1 && endCol - start > 0) {
        for(let i=endRow-1; i>start; --i) {
            result.push(matrix[i][start]);
        }
    }
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(printMatrix(matrix));