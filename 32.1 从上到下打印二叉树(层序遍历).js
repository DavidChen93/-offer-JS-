/*
题目一：不分行从上到下打印二叉树（层序遍历）
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/**
举一反三：
不管是广度优先遍历一幅有向图还是一棵树，都要用到队列。首先把起始节点（对树而言是根节点）放入队列。
接下来每次从队列的头部取出(shift()，先入先出FIFO)一个节点，遍历这个节点之后，
把能够达到的节点（对树而言是子节点）都依次放入队列。
重复这个遍历过程，直到队列中的节点全部被遍历为止。
*/



//层序遍历使用队列先入先出，前、中、后序遍历使用栈
function printFromTopToBottom(root) { 
    let helpQueue = [],
        result = [];
        
    if(root !== null) {
        helpQueue.push(root);
    }
    
    while(helpQueue.length !== 0) {
        let node = helpQueue.shift();
        result.push(node.val);
        if(node.left !== null) {
            helpQueue.push(node.left);
        }
        if(node.right !== null) {
            helpQueue.push(node.right);
        }
    }
    return result;
}


let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1)
let left1 = new TreeNode(4)
let right2 = new TreeNode(5)
root.left = left;
root.right = right;
left.left = left1;
left.right = right2;
console.log(printFromTopToBottom(root));
console.log(printFromTopToBottom1(root));