/*
题目：
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回true，否则返回false。
假设输入的数组的任意两个数字都互不相同。
*/


/**
举一反三：
如果要求处理一颗二叉树的遍历序列，则可以先找到二叉树的根节点，
在基于根节点把整棵树的遍历序列拆分成左子树和右子树对应的子序列，
接下来再递归的处理这两个子序列。
*/


/*
在后序遍历得到的序列中，最后一个数字是树的根节点的值。数组中前面的数字分为两部分：
第一部分是左子树节点的值，它们都比根节点的值小，
第二部分是右子树节点的值，它们都比根节点的值大。
拆分后，如果在第二部分出现了比根节点的值小的节点，说明不是二叉搜索树。
否则继续拆分。
*/
function verifySequenceOfBST(arr) {
    if(arr.length <= 0) {
        return false;
    }
    
    let len = arr.length;
    let root = arr[len - 1];
    
    //在二叉搜索树中左子树节点的值小于根节点的值
    let index = 0;//它是分界点，第二部分的第一个节点位置
    for(; index < len - 1; ++index) {
        if(arr[index] > root) {
            break;
        }
    }
    
    //在二叉搜索树中，右子树的节点的值大于根节点的值
    let j = index;
    for(; j < len - 1; ++j) {
        if(arr[j] < root) {
            return false;
        }
    }
    
    //然后判断左子树的是不是二叉搜索树
    let left = true;
    if(index > 0) {
        left = verifySequenceOfBST(arr.slice(0, index));
    }
    
    //判断右子树是不是二叉搜索树
    let right = true;
    if(index < len - 1) {
        right = verifySequenceOfBST(arr.slice(index, len - 1));
    }
    
    return left && right;
}

console.log(verifySequenceOfBST(5,7,6,9,11,10,8))