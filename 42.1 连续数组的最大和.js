/**
题目：
输入一个整型数组，数组里面有正数，也有负数。数组中的一个或连续多个整数组成一个子数组。
求所有子数组的和的最大值。要求时间复杂度为O(n)
*/


/**
思路一：暴力枚举，一个一个子数组计算
*/
function subArray(array){
    let max = array[0],
        start = 0,
        end = 0;
    for(let i=0,len=array.length; i<len; i++) {
        let sum = 0;
        for(let j=i; j<len; j++) {
            sum += array[j];
            if(sum > max) {
                max = sum;
                start = i;
                end = j;
            }
        }
    }
    //return max;
    return array.slice(start, end+1);
}

/**
思路二：
前面累加和加上当前值，其结果比当前值还小，说明前面的累加值还不如当前值开始，
那么就重新计算子数组的起始位置，然后重复之前的步骤
*/
function findSubArray(arr) {
    if(arr.length < 1) {
        return 0;
    }
    let max = arr[0],
        sum = arr[0],
        start = 0,
        end = 0;
    for(let i=1, len=arr.length; i<len; ++i) {
        sum += arr[i];
        if(sum < arr[i]) {
            sum = arr[i];
        }
        if(sum > max) {
            max = sum;
        }
    }
    return max;
}

/**
思路三：动态规划
*/
function subArray(array) {
    let arr = [],
        start = 0,
        end = 0;
    for(let i=0,len=array.length; i<len; i++) {
        if(i === 0 || arr[i-1] <= 0) {
            arr.push(array[i]);
        } else {
            arr.push(arr[i - 1] + array[i]);
        }
    }
    return arr.sort((a, b)=>a-b).pop();
}


console.log(findSubArray([6,-3,-2,7,-15,1,2,2]));