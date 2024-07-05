function swap(arr){
    let temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}

console.log(swap([1,2,3,4]));
console.log(swap([2]));
console.log(swap([]));
