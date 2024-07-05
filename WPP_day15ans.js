// Sum of 3 elements of Array integer of length 3
function sum(arr)
{
    if(arr.length==3)
    {
    let sum=0;
    for(ele in arr)
        sum+=arr[ele];
    return sum;
}
else {
    console.log("The length of Array must be 3 only");
    return -1;
}
}

console.log(sum([1,2,3]));
console.log(sum([1,2,3,3,5]));
console.log(sum([1]));

