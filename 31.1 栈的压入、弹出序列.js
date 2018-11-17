/*
题目：
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
假设压入的所有数字均不相同。

例如：
序列{1,2,3,4,5}是某栈的压栈序列，序列{4,5,3,2,1}是该压栈序列对应的一个弹出序列，
但{4,3,5,1,2}就不可能是该压栈序列的弹出序列
*/


/*
思路：
如果下一个弹出的数字刚好是栈顶数字，那么直接弹出；如果下一个弹出的数字不在栈顶，
则把压栈序列中还没有入栈的数字压入辅助栈，直到把下一个需要弹出的数字压入栈顶为止；
如果所有数字都压入栈后仍然没有找到下一个弹出的数字，那么该序列不可能是一个弹出序列。
*/
function isPopOrder(pushV, popV) {
    let helpStack = [];
    
    while(pushV.length !== 0 || popV.length !== 0) {
        if(helpStack[helpStack.length - 1] === popV[0]) {
            helpStack.pop();
            popV.shift();
        } else {
            let index = pushV.indexOf(popV[0]);
            if(index !== -1) {
                for(let i=0; i<=index; ++i) {
                    helpStack.push(pushV.shift());
                }
                helpStack.pop();
                popV.shift();
            } else {
                break;
            }
        }       
    }
    return popV.length === 0 ? true : false;
}

console.log(isPopOrder([1,2,3,4,5],[4,5,3,2,1]))