/*
题目：
用两个栈实现一个队列。
要求：
队列的声明如下，请实现它的两个函数push(队尾压入)和pop(队头弹出)，分别完成在队列尾部插入节点和在队列头部删除节点的功能
*/

function Queue() {
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.push = function(value) {
    this.stack1.push(value);
}

Queue.prototype.pop = function() {
    while(this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
    }
    let result = this.stack1.pop();
    while(this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
}

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    push(value) {
        this.stack1.push(value);
    }
    
    pop() {
        while(this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop());
        }
        let result = this.stack1.pop();
        while(this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }
        return result;
    }
}