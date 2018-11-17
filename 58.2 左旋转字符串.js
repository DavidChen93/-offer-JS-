//字符串左移n位后，拼接到字符串尾部。也就是把字符串前n个换到后面去
function LeftRotateString(str, n)
{
    // write code here
    if(n>str.length || n<0){
        return false;
    } else if(n === str.length || n === 0){
        return str;
    } else{
        return str.slice(n)+str.slice(0,n);
    }
}

//利用队列的特性
function LeftRotateString(str, n)
{
    let arr1 = str.split("");
    for(let i=0;i<n;i++){
        arr1.push(arr1.shift());
    }
    return arr1.join("");
}

//利用n分割，然后翻转两个子字符串，最后翻转整个字符串，总共过三次翻转
function LeftRotateString1(str, n){
    let arr = str.split("");
    reverse(arr,0,n-1);
    reverse(arr,n,arr.length-1);
    return reverse(arr,0, arr.length-1).join("");
}

function reverse(arr, start, end){
    if(arr.length <= 0) return false;
    while(start<end){
        [arr[start],arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

let str = " ";
console.log(LeftRotateString(str,6));
