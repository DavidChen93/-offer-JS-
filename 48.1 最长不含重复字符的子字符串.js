/*
题目：
请从字符串中找出一个最长的不包含重复字符的字符串，计算该最长子字符串的长度。
假设：
字符串中只包含'a'~'z'的字符。
*/

//暴力法，O(n^3)的复杂度，indexOf也是复杂度O(n)，这个不能忘
function findMaxSubstring(str) {
    let len = str.length,
        maxLength = 1,
        maxSubstr = "";
    if(len === 1) {
        return str;
    }

    for(let i=0; i<len-1; i++) {
        for(let j=i+1; j<len; j++) {
            if(str.slice(i,j).indexOf(str[j]) !== -1) {
                break;
            }
            if(maxLength < j-i+1) {
                maxLength = j - 1 + 1;
                maxSubstr = str.slice(i,j+1);
            }
        }
    }
    return maxSubstr;
}


//动态规划：时间复杂度O(n^2)
//f(i)表示第i个字符串为结尾的不包含重复字符串的子字符串的最长长度
//专门用一个负责数组作为重复字符串的判断
function findMaxSubstring2(str) {
    let len = str.length,
        maxLengthArr = [1];
    if(len === 1) {
        return str;
    }

    for(let i=1; i<len; i++) {
        let maxLength = maxLengthArr[i-1],
            index = str.slice(i-maxLength, i).indexOf(str[i]);
        maxLengthArr[i] = maxLength - index;
    }

    const max = maxNumOfArray(maxLengthArr),
        index = max.index,
        maxNum = max.maxLen;
    return str.slice(index-maxNum+1, index+1);
}

function maxNumOfArray(arr) {
    //取巧的方式，实际上顺序查找更快
    let max = arr[0],
        index = 0;
    for(let i=1,len=arr.length;i<len;i++) {
        if(max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return {
        index,
        maxLen: max
    };
    //return arr.sort((a, b) => a-b).pop();
    //return Math.max(...arr);
}

console.log(findMaxSubstring2("arabcacfr"));