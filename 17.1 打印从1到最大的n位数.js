/*
题目：
输入数字n，按顺序打印出从1到最大的n位十进制数
例如：
输入3，则打印出1,2,3一直打最大的三位数
*/

/*大数情况下，会溢出*/
function print(n) {
    let max = 1;
    for(let i=0; i<n; ++i) {
        max = max*10;
    }
    
    for(let i=1; i<max; i++) {
        console.log(i);
    }
}


/*
递归的方式
有点麻烦，这种题的可能性不大
*/ 
function print(n) {
    if(n<=0) {
        return 0;
    }
    
    let 
}

print(2);