/**
题目：
数组中有一个数字出现次数超过数组长度的一半，请找出这个数字
*/

/**
思路一：暴力枚举
先排序，然后找出中间的值，复杂度O(nlogn)
*/


/**
思路二：利用O(n)的空间，换取时间复杂度O(n)
*/
function moreThanHalfNum(arr) {
    let help = {};
    for(let i=0,len=arr.length; i<len; ++i) {
        let temp = arr[i];
        if(help[temp]) {
            help[temp] += 1;
        } else {
            help[temp] = 1;
        }
    }
    let mid = Math.floor(arr.length / 2);
    for(let item in help) {
        //超过一半
        if(help[item] > mid) {
            return help[item];
        }
    }
    return 0;
}

/**
思路三：
利用这个数组的特性，保存两个值，一个是数组中的数字，另一个是次数。
如果次数变为了0，则以当前值为新的基准，计count为1.
*/
function MoreThanHalfNum(arr) {
    if(arr.length <= 0) {
        return 0;
    }
    let result = arr[0],
        count = 1;
    for(let i=1, len=arr.length; i<len; ++i) {
        if(arr[i] === result) {
            ++count;
        } else {
            --count;
        }
        if(count === 0 && i!==len-1) {
            result = arr[i];
            count = 1;
        }
    }
    if(count === 0) {
        return 0;
    } else {
        return result;
    }
}
console.log(MoreThanHalfNum([1,2,3,2,2,2,5,4,2]));