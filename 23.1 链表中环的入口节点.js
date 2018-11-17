/*
题目：
如果一个链表中包含环，如何找出环的入口节点？
*/

/*
思路：
参考22节中的，两个指针，一个走2步，一个走1步。如果走得快的指针最后追上了走的慢的指针，则表示有环
如果快的指针走到链表末尾，都没追上，说明没有环

两个指针相遇的节点，一定在环中，从该节点出发，再次回到该节点时，就是环的节点数

然后让一个指针先走n步(两个指针之间的距离为n-1)，后一个指针在开始，当它们重叠时，就是环的入口
*/
function meetingNode(head) {
    if(head === null) {
        return null;
    }
    
    let pSlow = head;
    let pFast = head;
    
    while(pFast && pFast.next) {
        pFast = pFast.next.next;
        pSlow = pSlow.next;
        if(pFast === pSlow) {
            return pFast;
        }
    }
    return null;
}


function findEntryNodeOfLoop(head) {
    let meetNode = meetingNode(head);
    if(meetNode === null) {
        return null;
    }
    
    //获取环中的节点数目
    let nodeCountInLoop = 1;
    let pNode1 = meetNode;
    while(meetNode !== pNode1.next) {
        pNode1 = pNode1.next;
        ++nodeCountInLoop;
    }
    
    //先移动前面的头指针环节点数的步数
    let pFast = head;
    let pSlow = head;
    for(let i=0; i<nodeCountInLoop; ++i) {
        pFast = pFast.next;
    }
    //然后一起移动，相遇就是入口节点
    while(pFast !== pSlow){
        pFast = pFast.next;
        pSlow = pSlow.next;
    }
    return pFast;
}