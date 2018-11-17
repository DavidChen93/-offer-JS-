/**
题目：
在一个排序的链表中，删除重复的节点
*/
function Node(val) {
    this.val = val;
    this.next = null;
}

function deleteDuplicate(head) {
    //有可能头结点就重复，所以先自己创建一个头结点
    let tempHead = new ListNode('head');
    tempHead.next = head;
    let pre = tempHead,
        //为了不改变头结点的指向
        currentNode = head;
        
    while(currentNode) {
        //如果有重复的节点，那么当前节点指向下一个节点，继续判断是否重复
        while((currentNode.next !== null) && (currentNode.next.val === currentNode.val)) {
            currentNode = currentNode.next;
        }
        
        //当前节点位置没有移动，即pre.next(他是指向循环开始前的那个当前节点)没有变，还是之前的currentNode
        if(pre.next === currentNode) {
            //说明当前节点与下一个节点不重复，所以pre变成currentNode，不用修改pre的下一个节点，同时currentNode指向下一个节点
            pre = currentNode;
            currentNode = currentNode.next;
        } else {
            //移动了，说明有重复的值，那么currentNode指向不重复的node，同时pre.next也指向这个node(连接不重复的值)
            currentNode = currentNode.next;
            pre.next = currentNode;
        }
    }
    return tempHead.next;
}