/*
题目：
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的min函数。
要求：
在该栈中，调用min、push、pop的时间复杂度都是O(1)。
*/

//用一个辅助空间，保存每次推入时的最小值情况，同时伴随弹出这个辅助空间的栈顶最小值也会弹出
function createStack(){
    let dataStack = [],
        minStack = [];
    
    const pop = function() {
        minStack.pop();
        return dataStack.pop();
    }
    
    const push = function(value) {
        dataStack.push(value);
        const len = minStack.length;
        if(len === 0 || minStack[len - 1] > value) {
            minStack.push(value);
        } else {
            minStack.push(minStack[len - 1]);
        }
    }
    
    const min = function() {
        return minStack[minStack.length - 1];
    }
    
    return {
        pop,
        min,
        push,
    }
}

let stack = createStack();
stack.push(5)
stack.push()