/**
题目：
输入一个链表，输出该链表中倒数第k个节点。
要求：
为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第一个节点。
例如：
一个链表有6个节点，从头节点开始，他们的值依次是1、2、3、4、5、6.这个链表的倒数第三个节点是值为4的节点。
*/


/*
通用思路：
当我们用一个指针遍历链表不能解决问题的时候，可以尝试用两个指针来遍历链表，都是从头节点出发。
可以让其中一个指针遍历的速度快一些（比如一次走两步，找中间节点时），或者让它现在链表上走若干步。
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

//遍历两次链表
function kNodeInList(head, k) {
    if(head === null || k === 0) {
        return null;
    }
    
    let len = 0;
    let tempNode = head;
    while(tempNode) {
        tempNode = tempNode.next;
        ++len;
    }
    
    if(k > len) {
        return null;
    }
    
    let index = len - k + 1;
    result = head;
    for(let i=1; i< index; ++i) {
        result = result.next;
    }
    return result;
}

//只遍历一次链表，用两个指针，他们之间的距离相差k-1
//尾指针先走k-1步，到第k步，两个指针一起走。当尾指针达到链表尾节点时，头指针的位置就是倒数第k个
function kNodeInList(head, k) {
    if(head === null || k === 0) {
        return null;
    }
    
    let pHead = tail;
    let pTail = tail;
    for(let i=0; i<k-1; ++i) {
        if(pTail.next) {
            pTail = pTail.next;
        } else {
            return null;
        }       
    }
    
    while(pTail.next) {
        pTail = pTail.next;
        pHead = pHead.next;
    }
    return pHead;
}