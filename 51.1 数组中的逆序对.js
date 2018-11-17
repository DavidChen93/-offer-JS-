/*
代码来自牛客https://www.nowcoder.com/profile/8499263/codeBookDetail?submissionId=32733380
*/
function InversePairs(data)
{
    // write code here
    let len=data.length;
    let count=0;
    /*for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(data[i]>data[j])count++;
        }
    }*/
    count=merge(data);
    return count%1000000007;
}
//归并排序中进行计算，将统计的逆序对作为返回值
function merge(arr,left=0,right=arr.length-1){//使用默认参数令初始只需要给出数组作为参数即可；
    if(right - left == 0){//待排序数组只有一个数了
        return 0;//直接返回，不做修改
    }else if(right - left ==1){//待排序数组只有两个数了，直接比较大小并重新归位；
        if(arr[right]<arr[left]){
            [arr[left],arr[right]]=[arr[right],arr[left]];//交换
            return 1;//逆序对
        }
        return 0;
    }
    //待排序数组大于两个数，拆分排序然后归并；
    let mid=Math.ceil((right-left)/2)+left;
    let count=merge(arr,left,mid)+merge(arr,mid+1,right);
    //排序后归并
    let temp=[],i=left,j=mid+1;//存放归并时的临时排序数组
    for(;i<=mid && j<=right;){//排序放入temp中
        if(arr[i]<arr[j]){
            temp.push(arr[i]);
            i++;
        }else{
            temp.push(arr[j]);
            j++;
            count +=mid-i+1;
        }
    }
    while(j <= right ){
        temp.push(arr[j]);
        j++;
    }
    while(i <= mid ){
        temp.push(arr[i]);
        i++;
    }
    //从temp中取出放到arr
    for(let i=left,j=0;i<=right;i++){
        arr[i]=temp[j++];
    }
    return count;
}

console.log(InversePairs([7,5,6,4,4,4]));

