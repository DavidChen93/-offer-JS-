//队列是先入先出，所以是push和shift方法
class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    
    push(value) {
        this.queue1.push(value);
    }
    
    pop() {
        while(this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let result = this.queue1.shift();
        while(this.queue2.length !== 0) {
            this.queue1.push(this.queue2.shift());
        }
        return result;
    }
}