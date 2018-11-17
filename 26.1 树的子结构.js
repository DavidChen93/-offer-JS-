/*
题目：
输入两颗二叉树A和B，判断B是不是A的子结构
*/
function BinaryTreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//主树的遍历
function hasSubtree(root1, root2) {
    let result = false;
    if(root1 !== null && root2 !== null) {
        //前序遍历树
        if(isEqual(root1.val, root2.val)) {
            //当前根节点相同，有可能是子结构，去判断
            result = isTree2InTree1(root1, root2);
        }
        //从根节点出发不相同，继续遍历左子树做判断
        if(!result) {
            result = hasSubtree(root1.left, root2);
        }
        
        //在根节点和左子树都不存在，继续遍历右子树做判断
        if(!result) {
            result = hasSubtree(root1.right, root2);
        }
    }
    return result;
}

//子树的遍历，做比较
function isTree2InTree1(root1, root2) {
    if(!root2) {
        return true;
    }
    if(!root1) {
        return false;
    }
    
    if(!isEqual(root1.val, root2.val)) {
        return false;
    }
    
    return isTree2InTree1(root1.left, root2.left) && isTree2InTree1(root1.right, root2.right);
}


function isEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}