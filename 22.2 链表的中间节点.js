/*
思路
两个指针，一个走一步，一个走两步
*/

function findMidNodeOfList(head) {
    let pHead = head;
    let pTail = head;
    while(pTail && pTail.next) {
        pHead = pHead.next;
        pTail = pTail.next.next;
    }
    return pHead;
}