/*
题目：
实现函数power(base, exponent)
*/

function power(base, exponent) {
    if(exponent === 0) {
        return 1;
    }
    let result = 1
    
    abs = abs(exponent);
    
    for(let i=1; i<= abs; ++i) {
        result *= base;
    }
    
    if(exponent < 0) {
        //分母不能为0
        if(result === 0) {
            return false;
        } else {
            return 1 / result;
        }
    } else {
        return result;
    }
}

function abs(n){
    if(n >= 0) {
        return n;
    } else {
        return -n;
    }
}

console.log(power(0, -2))