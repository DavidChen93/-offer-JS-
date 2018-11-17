/*
题目：
请完成一个函数，输入一棵二叉树，该函数输出它的镜像。
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/*
思路：这个题目需要修改原来的树
先前序遍历这棵树的每个节点，如果遍历到的节点有子节点，就交换它的两个子节点
*/
function mirror(root) {
    //从上至下的交换，直接执行，没有返回值
    if(!root) {
        return;
    }
    if(!root.left && !root.right) {
        return;
    }
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    if(root.left) {
        mirror(root.left);
    }
    if(root.right) {
        mirror(root.right);
    }
}



/*
这个是返回新的一个树，没有修改原来的树
*/
function mirrorTree(root) {
    //递归终止条件
    if(root === null) {
        return null
    } 
    
    let newRoot = new TreeNode(root.val);
    
    newRoot.left = mirrorTree(root.right);
    newRoot.right = mirrorTree(root.left);
    return newRoot;
}
