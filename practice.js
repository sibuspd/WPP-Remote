function swap(arr)
{
    if(arr.length==1)
        return arr;
    else if(arr.length>0)
    {
        arr[0] = arr[0]+ arr[arr.length-1];
        arr[arr.length-1] = arr[0] - arr[arr.length-1];
        arr[0] = arr[0] - arr[arr.length-1];
        return arr;
    } 
    else {
        console.log("Array is blank");
        return -1;
    }

}

console.log(swap([1,2,3,4]));
console.log(swap([5,2,3,4,6,13,1]));
console.log(swap([2]));
console.log(swap([]));