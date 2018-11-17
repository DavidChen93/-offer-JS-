/**
题目：
给定一个数字，我们按照如下规则把它翻译为字符串：0翻译成‘a’，1翻译成’b‘...25翻译成’z‘。
一个数字可能有多个翻译。例如，12258有5种不同的翻译，分别是’bccfi‘、’bwfi‘、’bczi‘、’mcfi‘和’mzi‘。
要求：
请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
*/

/**
动态规划
假设f(i)为长度为i的数字的不同翻译方法，
如果i-1位上的数字可以和i组成25以下的数字，那么f(i) = f(i-1) + f(i-2);如果不能，则f(i) = f(i-1);
*/
function getTranslationCount(num) {
    let str = num.toString(10);
    let len = str.length;
    if(len <= 1) {
        return 1;
    }
    let help = [1];
    for(let i=1; i<len; ++i) {
        let temp = Number(str[i - 1]+str[i]);
        if(temp <= 25 && temp >= 10) {
            if(i === 1) {
                help[i] = help[i-1] + 1;
            } else {
                help[i] = help[i-1] + help[i-2];
            }   
        } else {
            help[i] = help[i-1];
        }
    }
    return help[len - 1];
}


//递归版实现
function recursive(str, index) {
    if(index <= 0) {
        return 1;
    }
    let temp = Number(str[index - 1] + str[index]);
    console.log(temp);
    if(temp <= 25 && temp >= 10) {
        return recursive(str, index - 1) + recursive(str, index - 2);
    } else {
        return recursive(str, index - 1);
    }
}

function getTranslationCount2(num) {
    let str = num.toString(10),
        index = str.length - 1;
    return recursive(str, index);
}