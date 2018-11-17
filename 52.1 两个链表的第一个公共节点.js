function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2) {
    let pLong, pShort, len1, len2, diff;
    len1 = GetLinkedListLength(pHead1);
    len2 = GetLinkedListLength(pHead2);
  
    if (len1 < len2) {
        diff = len2 - len1;
        pShort = pHead1;
        pLong = pHead2;
    } else {
        diff = len1 - len2;
        pShort = pHead2;
        pLong = pHead1;
    }
  
    //多出来的部分不可能相等
    for (let i = 0; i < diff; i++) {
        pLong = pLong.next;
    }
  
    while (pLong !== null &&
        pShort !== null &&
        pLong !== pShort) {
  
        pLong = pLong.next;
        pShort = pShort.next;
    }
  
    return pLong;
}
  
function GetLinkedListLength(pHead) {
    let node = pHead,
        len = 0;
    while (node !== null) {
        node = node.next;
        len++;
    }
    return len;
}