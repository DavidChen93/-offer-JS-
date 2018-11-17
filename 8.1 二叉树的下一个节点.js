/*
题目：
给定一个二叉树和其中的一个节点，如何找出中序遍历序列的下一个节点？树中的节点除了有两个分别指向左右子节点的指针，还有一个指向父节点的指针
*/

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
}

/*
思路：
如果该节点有右子树，说明此时中序遍历已经到了根节点，下一个节点就是它的右子树的最左子节点；
如果该节点没有右子树，若该节点是它父节点的左子节点，那么它的下一个节点就是他的父节点；
如果该节点既没有右子树，而且它还是他的父节点的右子节点，那么就沿着指向父节点的指针一直向上遍历，直到找到一个是它父节点的左子节点的节点。若存在，就是这个点，若不存在，则返回null
*/

function getNext(node) {
    if(!node) {
        return null;
    }
    
    let left = node.left;
    let right = node.right;
    let next = node.next;
    let result = {};
    
    
    if(right) {
        while(right.left) {
            right = right.left;
        }
        result = right;
    } else if(next) {
        let currentNode = node;
        //迭代寻找
        while(next && next.right === currentNode) {
            currentNode = next;
            next = next.next;
        }
        result = next;
    } else {
        result = null;
    }
    return result;
} 