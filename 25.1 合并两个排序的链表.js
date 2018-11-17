/*
题目：
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
*/

function ListNode(val) {
    this.val = val;
    this.next = next;
}

function mergeList(head1, head2) {
    if(head1 === null) {
        return head2;
    } else if(head2 === null) {
        return head1;
    }
    let resultHead = new ListNode();
    //一个节点同样递归下去
    if(head1.val < head2.val) {
        resultHead.val = head1.val;
        resultHead.next = mergeList(head1.next, head2);
    } else {
        resultHead.val = head2.val;
        resultHead.next = mergeList(head1, head2.next);
    }
    
    return resultHead;
}