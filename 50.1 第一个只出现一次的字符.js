function FirstNotRepeatingChar(str){
    let helper = '';
    for(let i=0,len=str.length;i<len-1;i++){
        if(str.indexOf(str[i],i+1) === -1 && helper.indexOf(str[i]) === -1){
            return i;
        }
        helper += str[i];
    }
    return -1;
}

//使用辅助数组计算每个字符的次数，不过map可能更好。
//因为JS进行ASCII的计算能力弱，只能利用String.charCodeAt(index)方法获取字符串中某个字符的Unicode编码
//方法二：O(n)的时间复杂度
function firstNotRepeatingChar(str) {
    //采用对象的方式
    let helperMap = {};
    for(let i=0,len=str.length;i<len;i++){
        if(helperMap[str[i]]){
            helperMap[str[i]] = helperMap[str[i]] + 1;
        } else {
            helperMap[str[i]] = 1;
        }
    }

    //采用map的方式
    let helpMap = new Map();
    for(let i=0,len=str.length;i<len;i++){
        if(helpMap.has(str[i])){
            helpMap.set(str[i], helpMap.get(str[i])+1);
        } else {
            helpMap.set(str[i], 1);
        }
    }

    //利用ASCII码做简单哈希表
    let hashMap = new Array(256);
    for(let i=0,len=str.length;i<len;i++){
        let ascii = str.charCodeAt(i);
        if(hashMap[ascii]){
            hashMap[ascii] += 1;
        } else {
            hashMap[ascii] = 1;
        }
    }

    //实际判断
    for(let i=0,len=str.length;i<len;i++){
        if(hashMap[str.charCodeAt(i)] === 1){
            return i;
        }
    }
    return -1;
}

console.log(firstNotRepeatingChar('google'));