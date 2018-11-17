/*
题目：
实现一个clone函数，复制一个复杂链表。
在复杂链表中，每个节点除了有一个next指针指向下一个节点，
还有一个sibling指针指向链表中的任一节点或者null。
*/
function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}


/**
剑指offer的解法
第一步根据原始链表的每个节点N创建对应的N’，但是将N‘连接在N的后面
第二步设置复制出来的节点的random，距离相同
第三步，拆分成2个链表，奇数是原始链表，偶数位置是复制链表
*/
function clone(head) {
    if(!head){
       return null;
    }
    cloneNodes(head);
    connectRandomNodes(head);
    return splitNodesList(head);
}
//第一步 复制单向链表
function cloneNodes(head) {
    let pHead = head;
    while(pHead !== null) {
        let cloneHead = new RandomListNode(pHead.label);
        //插入复制节点，先指向下一个节点
        cloneHead.next = pHead.next;
        //上一个节点，指向复制的节点
        pHead.next = cloneHead;
        //改变当前节点为，原始链表中的下一个节点。
        pHead = cloneHead.next;
    }
}

//第二步 设置random节点
function connectRandomNodes(head) {
    let pHead = head;
    while(pHead !== null) {
        let cloneNode = pHead.next;
        if(pHead.random) {
            //修改random的地方，因为复制节点就在原始节点的next上
            cloneNode.random = pHead.random.next;
        }
        pHead = cloneNode.next;
    }
}

//第三步 拆分链表，构建复制的链表
//奇数位置上的节点组成原始链表，偶数位置上的节点组成复制出来的链表
function splitNodesList(head) {
    let node = head,
        cloneHead = null,
        cloneNode = null;
    if(node !== null) {
        //获取复制链表
        cloneHead = node.next;
        cloneNode = node.next;
        //获取原始链表
        node.next = cloneNode.next;
        node = node.next;
    }
    
    while(node !== null) {
        //复制链表的next指向
        cloneNode.next = node.next;
        //下一轮循环
        cloneNode = cloneNode.next;
        //原始链表的next指向
        node.next = cloneNode.next;
        //下一轮循环
        node = node.next;
    }
    return cloneHead; 
}

/*
牛客网上A题的代码。但实际上是错的，因为random指向原先的链表节点
而不是复制后的链表的节点
*/
/*
function clone(head) {
    let newHead = {};
    if(JSON.stringify(head) !== '{}') {
        newHead = new RandomListNode(head.label);
        if(head.next !== null) {
            newHead.next = clone(head.next);
        }
        if(head.random !== null) {
            newHead.random = head.random;
        }
    }
    return newHead;
}
*/

/**
暴力解法：先构造next指向的单链表，然后在遍历原链表，找指向的位置
复杂度O(n^2)，本地测试的时候出现了循环引用
*/
/*
function cloneSingleList(head) {
    let newHead = new RandomListNode(head.label);
    if(head.next !== null) {
        newHead.next = cloneSingleList(head.next);
    }
    return newHead;
}

function clone(head) {
    let newHead= cloneSingleList(head);
    let tempHead1 = head;
    let tempHead4 = head;
    let tempHead2 = newHead;
    let tempHead3 = newHead;
    let index = -1;
    while(head !== null) {
        let index = 0;
        if(head.random !== null) {
            while(tempHead1 !== null) {
                if(tempHead1 === head.random) {
                    break;
                }
                ++index;
                tempHead1 = tempHead1.next;
            }
            for(let i=0; i<index; ++i) {
                tempHead3 = tempHead3.next;
            }
            tempHead2.random = tempHead3;
            tempHead1 = tempHead4;                
        }
        head = head.next;
        tempHead2 = tempHead2.next;
    }
    return newHead;
}
*/
/**
通过使用O(n)的辅助空间的哈希表，将源节点和复制节点的配对(位置)信息<N, N'>放入哈希表
然后在添加random指针的指向是，就可以在O(1)的时间内根据N->S，找到N'->S'
*/



let node1 = new RandomListNode(1);
let node2 = new RandomListNode(2);
let node3 = new RandomListNode(3);
node1.next = node2;
node1.random = node3;
node2.next = node3;
//node3.random = node1;
console.log(clone(node1));
console.log(Clone(node1));