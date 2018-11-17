/**
题目：
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分
*/

//可以改变数组本身前后顺序的情况下(即不稳定)
function moveOddBeforeEven(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    
    let head = 0,
        len = arr.length,
        tail = len - 1,
        headFlag = true,
        tailFlag = true;
    
    while(head < tail) {
        headFlag = isOdd(arr[head]);
        tailFlag = isOdd(arr[tail]);
        if(headFlag && tailFlag) {
            ++head;
        } else if(!headFlag && tailFlag) {
            [arr[head], arr[tail]] = [arr[tail], arr[head]];
            ++head;
            --tail;
        } else if(headFlag && !tailFlag) {
            ++head;
            --tail;
        } else {
            --tail;
        }
    }
    return arr;
}

//这就是判断条件而已，改变这个条件，可以实现别的排序方法
function isOdd(num) {
    return num % 2;
}


//不打乱顺序，暴力求解，辅助空间O(2n)
function moveOddBeforeEven(arr) {
    let oddArr = [];
    let evenArr = [];
    for(let i=0,len=arr.length; i<len; ++i) {
        if(arr[i] % 2) {
            oddArr.push(arr[i]);
        } else {
            evenArr.push(arr[i]);
        }
    }
    return oddArr.concat(evenArr);
}

console.log(moveOddBeforeEven([1,2,3,4,5,6,7,8,9,10]))