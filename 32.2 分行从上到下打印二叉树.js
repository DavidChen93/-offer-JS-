/*
题目：
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
例如：
8
6 10
5 7 9 11
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/*
和上一题差不多，使用队列。
但是这里需要一个变量表示当前层中还没有打印的节点数；
另一个变量表示下一层节点的数目
*/
function print(root) {
    let helpQueue = [],
        layer = [],
        result = [],
        curNum = 0,//当前层节点剩余个数
        nextNum = 0;//下一层节点剩余个数
    if(root !== null) {
        helpQueue.push(root);
        ++curNum;
    }
    
    while(helpQueue.length !== 0) {
        let node = helpQueue.shift();
        layer.push(node.val);
        --curNum;
        
        if(node.left !== null) {
            helpQueue.push(node.left);
            ++nextNum;
        }
        
        if(node.right !== null) {
            helpQueue.push(node.right);
            ++nextNum;
        }
        
        if(curNum === 0) {
            curNum = nextNum;
            nextNum = 0;
            result.push(layer);
            layer = [];//或者使用splice(0, result.length)
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
console.log(print(root));