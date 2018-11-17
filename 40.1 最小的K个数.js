/**
题目：
输入n个整数，找出其中最小的k个数
*/

/**
思路一：先排序，然后在找出最小的。但是有可能数组很大，会超时
*/

/**
思路二：利用长度为K的数组，保存k个目前最小的数，然后每次找到里面的最大值和当前值作比较
*/
function getLeastNums(array, k) {
    let len = array.length;
    if(k > len) {
        return false;
    }
    let arr = array.slice(0, k),
        maxIndex = findMaxIndex(arr),
        max = arr[maxIndex];
    for(let i=k; i<len; ++i) {
        if(array[i] < max) {
            arr[maxIndex] = array[i];
            maxIndex = findMaxIndex(arr);
            max = arr[maxIndex];
            
        }
    }
    return arr.sort((a, b) => a - b);
}
function findMaxIndex(arr) {
    let max = arr[0],
        index = 0;
    for(let i=1,len=arr.length; i<len; ++i) {
        if(max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(getLeastNums([4,5,1,6,2,7,3,8], 4));