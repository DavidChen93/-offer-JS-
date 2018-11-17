/**
题目：
输入一个字符串，打印出该字符的所有排序
*/


/**
思路：
1、把字符串分为两部：一部分是字符串的第一个字符；另一个部分是第一个字符以后的所有字符
2、拿第一个字符和它后面的字符逐个交换
*/
function permutation(str) {
    if(!str) {
        return str;
    }
    let result = [];
    let arr = str.split("");
    permutationCore(arr, 0, result);
    return [...new Set(result)].sort();
}

function permutationCore(arr, index, result) {
    if(index === arr.length) {
        result.push(arr.join(''));
    } else {
        for(let i= index, len = arr.length; i<len; ++i) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            permutationCore(arr, index + 1, result);
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    }
}


/**
思路二：回溯法
不断地去字符串数组里面拿一个字符出来拼接字符串，当字符串数组被拿空时，就把结果添加进结果数组里，然后回溯上一层。
*/
function Permutation1(str)
{
    let res=[],pStr="";
    if(str.length<=0) return res;
    arr=str.split("");//将字符串转化为字符数组
    res=permutate1(arr,pStr,res);
    return res;
}
function permutate1(arr,pStr,res){
    if(arr.length === 0){
        return res.push(pStr);
    }else{
        let isRepeated=new Set();
        for(let i=0;i<arr.length;i++){
            if(!isRepeated.has(arr[i])){//避免相同的字符交换
                let char=arr.splice(i,1)[0];
                pStr+=char;
                permutate1(arr,pStr,res);
                arr.splice(i,0,char);//恢复字符串，回溯
                pStr=pStr.slice(0,pStr.length-1);//回溯
                isRepeated.add(char);
            }
        }
    }
    return res;
}



console.log(permutation('abc'));
console.log(Permutation1('abc'));