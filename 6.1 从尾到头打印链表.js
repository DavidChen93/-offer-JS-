/*
题目：
输入一个链表的头节点，从尾到头反过来打印出每个节点的值
*/

//List节点定义
function Node(val) {
    this.val = val;
    this.next = null;
} 

//利用数组实现栈的特性
function printList(head) {
    let array = [];
    while(head) {
        array.push(head.val);
        head = head.next;
    }
    return array.reverse();
    
    /*
    for(let i=array.length-1; i>=0; --i) {
        console.log(array[i]);
    }
    */
}

//如果是直接输出的话，它其实是一个栈的形式，先访问的推入栈，然后