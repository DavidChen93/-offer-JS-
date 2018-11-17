/**
题目：
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接处的所有数字中最小的一个
*/


/*
思路一
全排列，然后比较大小，同时注意大数问题
*/


/*
思路二：
比如m和n，有两种拼接方式，mn和nm，如果mn<nm，那么n肯定排在m的前面。
把数组排序，不过是按照上面的规则排序，然后在拼接即可
利用ASCII码判断
*/
function printMinNumber(arr) {
    //就是排序函数，自己写一个排序也行，只不过不是数值比大小，而是拼接字符串比大小
    arr.sort(compare);
    return arr.join('');
}

function compare(m,n) {
    let str1 = m.toString(10),
        str2 = n.toString(10);
    return str1+str2 > str2+str1;
}

console.log(printMinNumber([3,32,321]));