/**
题目：
如果从数据流中读出的奇数个数值，那么中位数就是所有数值排序后位于中间的数值；
如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
*/
let arr = []
function Insert(num)
{
    // write code here
    arr.push(num);
}
function GetMedian(){
	// write code here
    arr.sort((a, b)=>a-b);
    let len = arr.length,
        mid = Math.floor(len / 2);
    if(len % 2) {
        return arr[mid];
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
}