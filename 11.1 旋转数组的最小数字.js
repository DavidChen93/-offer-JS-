/*
题目：
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
要求：
输入一个递增的排序数组的一个旋转，输出旋转数组的最小元素。
*/

//不考虑旋转和递增的特性，直接暴力。复杂度O(n)
function findMin(arr) {
    let min = arr[0];
    for(let i=1, len =arr.length; i<len; ++i) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//考虑递增的特性，旋转之后会出现阶跃,复杂度也是O(n),最好情况是一次就行
function findMin(arr) {
    for(let i=1, len=arr.length; i<len; ++i) {
        if(arr[i] - arr[i - 1] < 0) {
            return arr[i];
        }
    }
}

//考虑递增和旋转特性，使用二分查找，因为基本有序。注意条件递增，而不是非递减
//牛客网上不能AC
function findMin(arr) {
    let start = 0,
        end = arr.length - 1;
    while(end - start != 1) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[start]) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return arr[end];
}
console.log(findMin([1,1,1,0,1]));