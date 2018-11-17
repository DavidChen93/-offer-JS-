/**
题目：
在O(1)时间内删除链表的节点
*/

function Node(val) {
    this.val = val;
    this.next = null;
}


/*顺序查找，复杂度O(n)*/
function deleteNode(head, node) {
    let next = null,
        pre = null;
    while(head !== node) {
        pre = head;
        head = head.next;
    }
    
    
    next = head.next;
    
    if(pre === null) {
        head.next = null;
    } else {
        pre.next = next;
    }
}

/*O(1)复杂度，因为已经知道了节点，所以直接让当前节点指向下下个节点，就相当于删除了该节点(覆盖此节点)*/
function deleteNode(head, node) {
    //要删除的节点不是尾节点
    let next = null;
    if(node.next !== null) {
        //直接覆盖
        next = node.next;
        node.val = next.val;
        node.next = next;
    }
    //链表中只有一个节点，删除头结点(也是尾节点)
    else if(head === node) {
        node = null;
        head = null;
    }
    //链表中有多个节点，删除尾节点（node是尾节点的情况下，要让父节点指向null，直接改变node为null没用）
    else {
        let pre = null;
        while(head !== node) {
            pre = head;
            head = head.next;
        }
        pre = null;
        head = null;
        /*
        while(head.next !== node) {
            head = head.next;
        }
        head.next = null;
        node = null;
        */
    }
}