//暴力解法
function findDuplicate(arr) {
    for(let i=0, len= arr.length; i<len; ++i) {
        for(let j=i+1; j<len; ++j) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        } 
    }
    return false;
}

//还有先排序，然后在判断，和暴力差不多
function findDuplicate(arr) {
    arr.sort((a, b) => a - b);
    for(let i=0, len= arr.length; i<len; ++i) {
        if(arr[i] === arr[i+1]) {
            return arr[i];
        }
    }
    return false;
}

//如果没有重复,那么i就应该在数组下标i对应的元素里面，因为有重复，所以必定有同一位置多个值，复杂度O(n)
function findDuplicate(arr) {
    for(let i=0, len=arr.length; i<len; ++i) {
        while(arr[i] != i) {
            if(arr[arr[i]] === arr[i]) {
                return arr[i];
            } else {
                //交换arr[i]和arr[arr[i]]的值
                let temp = arr[i];
                arr[i] = arr[temp];
                arr[temp] = temp;
            }
        }
    }
    return false;
}

console.log(findDuplicate([2,3,1,0,2,5,3]));