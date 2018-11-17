/*
题目：
求斐波那契数列的第n项
要求：
写一个函数，输入n，求斐波那契数列数列的第n项。
*/

//非为递归优化
function fib(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    
    return fib(n - 1) + fib(n - 2);
}

//尾递归优化，值调用函数本身，不会有其他运算
function fib2(n, pre = 0, current = 1) {
    if(n <= 0) return pre;
    if(n === 1) return current;
    
    //pre = current;
    //current = pre + current;
    
    return fib2(n - 1, current, pre + current);
}

//非递归实现
function fib3(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    
    let pre = 0,
        current = 1,
        temp = 0,//临时变量保存pre值，不然会被更新
        i = 2;
    while(i <= n) {
        temp = pre;
        pre = current;
        current = temp + current;
        ++i;
    }
    return current;
}

console.log(fib3(10))