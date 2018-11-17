/*
题目：
在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
要求：
完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
*/

//忽略递增这个信息，采用纯暴力的方式
//是方阵？题目没给
function find(matrix, num) {
    let rows = matrix.length;
    for(let i=0; i< rows; ++i) {
        for(let j=0,len=matrix[i].length; j<len; ++j) {
            if(matrix[i][j] === num) {
                return true;
            }
        }
    }
    return false;
}


//递增，所以有序，每一行的查找可以采用二分查找
function divideFind(arr, num) {
    let start = 0,
        end = arr.length - 1,
        mid = Math.floor((end + start) / 2);
    while(start <= end) {
        if(num < arr[mid]) {
            end = mid - 1;
        } else if(num > arr[mid]) {
            start = mid + 1;
        } else {
            return true;
        }
        mid = Math.floor((end + start) / 2);
    }
    return false
}
//上面的改写，复杂度降低为0(nlogn)
function find(matrix, num) {
    let rows = matrix.length;
    for(let i=0; i< rows; ++i) {
        if(divideFind(matrix[i], num)) {
            return true;
        }
    }
    return false;
}

//考虑到上下都是递增,所有可以从右上角开始，进行行列的缩减
function find(matrix, num) {
    let rows = matrix.length,
        cols = matrix[0].length;
    if(rows > 0 && cols > 0) {
        let row = 0,
            col = cols - 1,
            temp = 0;
        while(row < rows && col >= 0) {
            temp = matrix[row][col];
            if(num < temp) {
                --col;
            } else if(num > temp) {
                ++row;
            } else {
                return true;
            }
        }
    }
    return false;
}

let matrix = [
    [1,2,8,9],
    [2,4,9,12],
    [4,7,10,13],
    [6,8,11,15]
]
console.log(find(matrix, 14));