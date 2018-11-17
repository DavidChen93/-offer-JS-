/*
题目：
给了链表头结点，翻转链表
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/*
思路：
假设现在到了节点i，首先拿到i+1的节点保存在nextNode当中，防止断链。然后将i节点的next指向i-1节点，这个i-1节点保存在pre当中。
然后置pre为当前节点i，下一个节点变成nextNode

也就是nextNode = pHead.next;
pHead.next = pre;
pre = pHead;
pHead = nextNode;
最后pHead节点为null，表示链表遍历完成，返回上一节pre，即翻转后的头结点
*/
function reverseList(head) {
    let pHead = head;
    //初始化
    let pre = null;//保存上一个节点，之后节点的指向
    let nextNode = null;//保存下一个节点，不断链
    while(pHead) {
        nextNode = pHead.next; 
        pHead.next = pre;
        pre = pHead;
        pHead = nextNode;
    }
    return pre;
}