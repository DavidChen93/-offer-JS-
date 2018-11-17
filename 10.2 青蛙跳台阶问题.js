/*
题目：
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶
要求：
该青蛙上一个n级台阶总共有多少种跳法
*/

//思路，就是一个斐波那契数列，f(n) = f(n-1) + f(n-2)，因为第一次跳跃可以是1级，此时跳法数目就是f(n-1)，也可以是2级,此时跳法数目是f(n-2)，后面的同理
function fib(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    return fib(n - 1) + fib(n - 2);
}

function jumpFloor(n)
{
    // write code here
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    let pre = 1,
        current = 2,
        temp = 0,
        i = 3;
    while(i <= n) {
        temp = pre;
        pre = current;
        current = temp + current;
        ++i;
    }
    return current;
}


//变态跳台阶，每次能跳1~n级，数学归纳f(n) = 2^(n-1)