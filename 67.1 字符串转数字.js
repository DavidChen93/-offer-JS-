/*
题目：
输入字符串，转成数字，类似于parseInt，但是要判断+ - 以及无效字符的情况
*/

function parse(str) {
    let result = 0,
        flag = 1,
        index = 0,
        len = str.length;
    if(len === 0) {
        return 0;
    }
        
        
    if(str[0] === '-') {
        flag = -1;
        index = 1;
    } else if(str[0] === "+") {
        index = 1;
    }
    
    for(let len = str.length; index < len; ++index) {
        if(str[index] >= '0' && str[index] <= '9'){
            result = result * 10 + (str[index] - '0');
        } else {
            //如果是没有有效数字就返回0，那么这里就可以直接返回0
            break;
        }
    }
    
    return flag * result;
}

console.log(typeof parse('-10a10'), parse('-10a10'))