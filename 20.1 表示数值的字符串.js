/*
题目：
请实现一个函数，用来判断字符串是否表示数值（包括整数和小数）
例如：
字符串“+100”、“5e2”、“-123”、“3.1415”即“-1E-16”都表示数值，但“12e”、“1a3.14”、“1.2.3”、“+-5”“12e+5.4”都不是
*/



//字符串形式为A[.[B]][e|EC]或者.B[e|EC]，其中A为数值的整数部分，B紧跟这小数点为数值的小数部分，C紧跟着“e”或者“E”为数值的指数部分。
//同时小数可能没有数值的整数部分
function isNumeric(s)
{
    //先判断有没有+1，\d*整数数值位置 \.?小数 \d*指数前可以是小数 判断是否有e或者E的情况
    let reg = /^(\+|-)?\d*\.?\d*((e|E)(\+|-)?\d+|\d*)$/;
    return reg.test(s);
}


//A[.[B]][e|EC]或者.B[e|EC],其中A和C都是整数(可以有正负号，也可以没有)，而B是一个无符号整数
function isNumeric(str) {
    // 标记符号、小数点、e是否出现过
    let sign = false, decimal = false, hasE = false;
    for (let i = 0, len = str.length; i < len; ++i) {
        if (str[i] === 'e' || str[i] === 'E') {
            if (i === len-1) return false; // e后面一定要接数字
            if (hasE) return false;  // 不能同时存在两个e
            hasE = true;
        } else if (str[i] === '+' || str[i] === '-') {
            // 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
            if (!sign && i > 0 && str[i-1] !== 'e' && str[i-1] !== 'E') return false;
            // 第二次出现+-符号，则必须紧接在e之后
            if (sign && str[i-1] !== 'e' && str[i-1] !== 'E') return false;
            sign = true;
        } else if (str[i] === '.') {
          // e后面不能接小数点，小数点不能出现两次
            if (hasE || decimal) return false;
            decimal = true;
        } else if (str[i] < '0' || str[i] > '9') // 不合法字符
            return false;
    }
    return true;
}