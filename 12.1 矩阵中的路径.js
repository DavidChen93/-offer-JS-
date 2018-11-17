/*
题目：
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
要求：
路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
*/

//使用回溯法，矩阵可能不是方阵，都是以输入为矩阵数组，如果不是需要自己转换
function isHasPath(matrix, rows, cols, path) {      
    if(rows === 0 || cols === 0) return false;
    //构造辅助矩阵，用于判断当前格子是够达到过，0为未达到，1为到达
    let vistiedMatrix = [];
    for(let i=0; i<rows; ++i) {
        vistiedMatrix[i] = new Array(cols).fill(false);
    }
    
    //以不同的格子作为起点
    for(let i=0; i< rows; ++i) {
        for(let j=0; j<cols; ++j) {
            if(matrix[i][j] === path[0]) {
                if(path.length === 1) return true;
                vistiedMatrix[i][j] = true;
                if(isMatch(matrix, rows, cols, i, j, path.slice(1), vistiedMatrix)) {
                    return true;
                }
                vistiedMatrix[i][j] = false;
            }
        }
    }
    return false;
}

/*
思路：
当矩阵中坐标为(row,col)的格子和路径字符串中下标为pathLength的字符一样时，
从4个相邻的格子(row, col-1)、(row-1, col)、(row, col+1)、(row+1,col)中去寻找路径字符串中下标为pathLength+1的字符。
如果都没有匹配,表示当前路径不对，回到上一个字符，重新寻找
*/

//用于判断是否匹配字符
function isMatch(matrix, rows, cols, row, col, path, vistiedMatrix) {
    if(path.length === 1) return true;
    
    //上边寻找
    if(row > 0 && matrix[row - 1][col] === path[0] && !vistiedMatrix[row - 1][col]) {
        vistiedMatrix[row - 1][col] = true;
        if(isMatch(matrix, row, cols, row - 1, col, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row - 1][col] = false;
    }
    
    //下边寻找
    if(row < rows - 1 && matrix[row + 1][col] === path[0] && !vistiedMatrix[row + 1][col]) {
        vistiedMatrix[row + 1][col] = true;
        if(isMatch(matrix, row, cols, row + 1, col, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row + 1][col] = false;
    }
    
    //左边寻找
    if(col > 0 && matrix[row][col - 1] === path[0] && !vistiedMatrix[row][col - 1]) {
        vistiedMatrix[row][col - 1] = true;
        if(isMatch(matrix, row, cols, row, col - 1, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row][col - 1] = false;
    }
    
    //右边寻找
    if(col < cols - 1 && matrix[row][col + 1] === path[0] && !vistiedMatrix[row][col + 1]) {
        vistiedMatrix[row][col + 1] = true;
        if(isMatch(matrix, row, cols, row , col + 1, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row][col + 1] = false;
    }
    return false;
}



/*剑指offer上的代码*/
function isHasPath(matrix, rows, cols, path) {      
    if(rows === 0 || cols === 0) return false;
    //构造辅助矩阵，用于判断当前格子是够达到过，0为未达到，1为到达
    let vistiedMatrix = [];
    for(let i=0; i<rows; ++i) {
        vistiedMatrix[i] = new Array(cols).fill(false);
    }
    
    //以不同的格子作为起点
    for(let i=0; i< rows; ++i) {
        for(let j=0; j<cols; ++j) {
            if(matrix[i][j] === path[0]) {
                if(isMatch(matrix, rows, cols, i, j, path, 0, vistiedMatrix)) {
                    return true;
                }
            }
        }
    }
    //vistiedMatrix = null;
    return false;
}

/*
思路：
当矩阵中坐标为(row,col)的格子和路径字符串中下标为pathLength的字符一样时，
从4个相邻的格子(row, col-1)、(row-1, col)、(row, col+1)、(row+1,col)中去寻找路径字符串中下标为pathLength+1的字符。
如果都没有匹配，表示当前路径不对，回到上一个字符，重新寻找
*/

//用于判断是否匹配字符
function isMatch(matrix, rows, cols, row, col, path, pathLength, vistiedMatrix) {
    if(path.length === pathLength) return true;
    
    let hasPath = false;
    //当前格子和字符能匹配，那么就去寻找上下左右匹配否，不匹配就回退，匹配就继续
    if(row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col] === path[pathLength] && !vistiedMatrix[row][col]) {
        ++pathLength;
        vistiedMatrix[row][col] = true;
        hasPath = isMatch(matrix, rows, cols, row, col - 1, path, pathLength, vistiedMatrix)
                || isMatch(matrix, rows, cols, row - 1, col, path, pathLength, vistiedMatrix)
                || isMatch(matrix, rows, cols, row + 1, col, path, pathLength, vistiedMatrix)
                || isMatch(matrix, rows, cols, row, col + 1, path, pathLength, vistiedMatrix);
    
        if(!hasPath) {
            --pathLength;
            vistiedMatrix[row][col] = false;
        }
    }
    
    return hasPath;
}

let matrix = [
    ['a', 'b', 't', 'g'],
    ['c', 'f', 'c', 's'],
    ['j', 'd', 'e', 'h']
]

console.log(isHasPath(matrix, 3, 4, 'bfce'));