//方法一：暴力这个不难理解O(n^2)

//方法二：采用辅助数组，辅助空间是O(n)，时间复杂度是O(n)
function findDuplicate(arr) {
    //辅助数组的下标和对应的元素值是相同的
    let help = [],
        temp = 0;
    for(let i=0, len=arr.length; i<len; ++i) {
        temp = arr[i];
        if(help[temp] === temp) {
            return temp;
        } else {
            help[temp] = temp;
        }
    }
    return false;
}

//方法三：采用二分查找的方式，以长度的一半为中间值，每次判断两部分的个数，复杂为O(nlogn)


console.log(findDuplicate([2,3,1,0,2,5,3]));