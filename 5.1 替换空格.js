/*
题目：
请实现一个函数，把字符串中的每个空格替换成"%20"
例如：
输入“We are happy.”，则输出“We%20are%20happy.”
*/

//暴力方法
function replaceSpace(str) {
    let result = "";
    for(let i=0,len=str.length; i<len; ++i) {
        if(str[i] === " ") {
            result += "%20";
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(replaceSpace('we are happy.'));

//