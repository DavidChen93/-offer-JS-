/*
题目：
请实现一个函数，用来判断一个二叉树是不是对称的。如果一个二叉树和它的镜像一样，那么他就是对称的。
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//判断数值是否相等
function isEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}


//剑指offer上的解法，利用前序遍历和逆前序遍历判断是否相等
function isSymmetrical(root) {
    return isSymmetricalCore(root, root);
}

function isSymmetricalCore(root1, root2) {
    if(!root1 && !root2) {
        return true;
    }
    //不能直接使用else，不然进入不了下面的流程
    if(!root1 || !root2){
        return false;
    }
    if(!isEqual(root1.val, root2.val)) {
        return false;
    }
    return isSymmetricalCore(root1.left, root2.right) && isSymmetricalCore(root1.right, root2.left);
}


/*
这里就要使用二叉树镜像中，那个返回新二叉树的方法
这是自己的方法，本地可以跑通，牛客上跑不通
*/
/*
function isSymmetrical(root) {
    return isSymmetricalCore(root, mirrorTree(root));
}

//获取镜像树
function mirrorTree(root) {
    if(root === null) {
        return null;
    }
    
    let newTree = new TreeNode(root.val);
    newTree.left = mirrorTree(root.right);
    newTree.right = mirrorTree(root.left);
    return newTree;
}

//判断该树与镜像树是否相等
function isSymmetricalCore(root1, root2) {
    //两棵树,使用null判断更好，如果存在0的情况就很尴尬了
    if(!root1 && !root2) {
        return true;
    } else {
        return false;
    }
    
    if(!isEqual(root1.val, root2.val)) {
        return false;
    }
    
    return isSymmetricalCore(root1.left, root2.left) && isSymmetricalCore(root1.right, root2.right);
    /*这是错误版本，递归条件写错了，陷入死循环。
    //加上这一句就对了，终止条件就是访问结束了。
    if(root1 === null) {
        return true;
    }
    let result = false;
    if(!isEqual(root1.val, root2.val)) {
        result = false;
    } else {
        result = isSymmetricalCore(root1.left, root2.left) && isSymmetricalCore(root1.right, root2.right);
    }
    return result;
    */
//}

let head = new TreeNode(1),
    left = new TreeNode(2),
    right = new TreeNode(2);
    left1 = new TreeNode(3),
    right1 = new TreeNode(3);
    head.left = left;
    head.right = right;
    left.left = left1;
    right.right = right1;
console.log(isSymmetrical(head));