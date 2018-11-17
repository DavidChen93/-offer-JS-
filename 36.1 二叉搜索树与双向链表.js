/**
题目：
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
要求不能创建任何新的节点，只能调整树中节点指针的指向。
*/
function BinaryTreeNode(val) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
二叉搜索树中序遍历的结果就是排序的结果
思路：
根节点、左子树和右子树。在把左、右子树都转换成排序双向链表之后再和根节点连接起来，
整棵二叉树也就转换成了排序双向链表。很明显递归的思路
*/
function Convert(root)
{
    if(root === null) {
        return null;
    }
    
    let arr = [];
    inOrder(root, arr);
    let len = arr.length;
    for(let i=1; i<len; ++i) {
        arr[i].left = arr[ i - 1];
        arr[i].right = arr[i + 1];
    }
    arr[0].left = null;
    arr[0].right = arr[1];
    arr[len - 1].right = null;
    return arr[0];
}

//中序遍历，保存在数组当中，然后就可以修改left和right的值了
function inOrder(node, arr){
    if(node !== null) {
        inOrder(node.left, arr);
        arr.push(node);
        inOrder(node.right, arr);
    }
}