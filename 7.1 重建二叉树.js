/*
题目：
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
要求：
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如，输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建这个二叉树，并输出它的头节点
*/

//二叉树节点的定义
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function reBuildBinaryTree(preOrder, inOrder) {
    if(inOrder.length === 0) {
        return null;
    }
    
    let root = preOrder[0];
    let head = new Node(root);
    //在中序遍历中找根节点
    //let index = inOrder.indexOf(root);
    //上面的方法可能找到-1，所以还需要处理if(index === -1) return new Error("invalid input");
    let index = 0;
    while(inOrder[index] !== root) {
        ++index;
    }
    
    head.left = reBuildBinaryTree(preOrder.slice(1, index + 1), inOrder.slice(0, index));
    head.right = reBuildBinaryTree(preOrder.slice(index + 1), inOrder.slice(index + 1));
    
    return head;
}