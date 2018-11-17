/*
题目：
输入一颗二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/*
从根节点到叶子才算一条路径，前序遍历，用一个栈保存路径节点值，如果当前累加值等于目标值，则加入result中
注意浅拷贝和深拷贝的问题
*/
function findPath(root, num) {
    if(root === null) {
        return [];
    }
    let path = [],
        result = [],
        currentSum = 0;
    findPathCore(root, num, path, currentSum, result);
    return result;
}

function findPathCore(root, num, path, currentSum, result) {
    currentSum += root.val;
    path.push(root.val);
    
    //判断是否为叶子节点，若为叶子结点，且路径和等于输入的值，则输出
    if(root.left === null && root.right === null && num === currentSum) {
        //result.push(path);这是浅拷贝，path的值会变
        //使用result.push([...path]);也行
        result.push([]);
        let temp = result[result.length - 1];
        for(let i=0,len=path.length; i<len; ++i) {
            temp.push(path[i]);
        }
    }
    
    if(root.left !== null) {
        findPathCore(root.left, num, path, currentSum, result);
    }
    if(root.right !== null) {
        findPathCore(root.right, num, path, currentSum, result);
    }
    path.pop();
}

let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1)
let left1 = new TreeNode(4)
let right1 = new TreeNode(5)
let left2 = new TreeNode(6)
let right2 = new TreeNode(7)
root.left = left;
root.right = right;
left.left = left1;
left.right = right1;
right.left = left2;
right.right = right2;
console.log(findPath(root, 11));
console.log(findPath(null, 11));