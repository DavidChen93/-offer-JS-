/*
题目：
我们把只包含因子2、3和5的数称作丑数。
要求：
从小到到的顺序的第1500个丑数
*/

//方法一：暴力
function isUgly(num) {
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    
    return num === 1 ? true : false;
}

function getUglyNumber(index) {
    if(index <= 0) {
        return 0;
    }
    
    let num = 0,
        uglyFound = 0;
    while(uglyFound < index) {
        ++num;
        if(isUgly(num)) {
            ++uglyFound;
        }
    }
    return num;
}


//方法二：空间换时间，保存之前的丑数，然后分别乘以2、3、5，在进行排序计数
function getUglyNumber(index) {
    if(index == 0){
        return 0;
    }
    var uglyArr = [1],
        two = 0,
        three = 0,
        five = 0;
    for(var i=1;i<index;i++){
        uglyArr[i] = Math.min(uglyArr[two]*2,uglyArr[three]*3,uglyArr[five]*5);
        if(uglyArr[i]==uglyArr[two]*2){
            two++;
        }
        if(uglyArr[i]==uglyArr[three]*3){
            three++;
        }
        if(uglyArr[i]==uglyArr[five]*5){
            five++;
        }
    }
    return uglyArr[index-1];
}

console.log(getUglyNumber(1500));