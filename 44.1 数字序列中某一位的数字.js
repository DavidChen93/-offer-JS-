/**
题目：
数字以0123456789101112...的格式序列化到一个字符序列中。在这个序列中，第5位（从0开始计数）是5，
第13位是1，第19位是4，等等。
写一个函数，求任意第n位对应的数字
*/

/**
思路：枚举
枚举时，计算每个数字的位数，然后相加
*/
function digitAtIndex(index) {
    let count = 0;
    for(let i=0; ; ++i) {
        count += getCountOfNum(i);
        if(count === index) {
            return i % 10;
        } else if(count > index) {
            let dis = count - index;
            return getBackNth(i, dis + 1);
        }
    }
}

function getBackNth(num, n) {
    let result = 0;
    while(n) {
        result = (num % 10);
        num = Math.floor(num / 10);
        --n;
    }
    return result;
}

function getCountOfNum(num) {
    let count = 0;
    while(num) {
        ++count;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(digitAtIndex(13))