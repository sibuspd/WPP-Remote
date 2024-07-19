// Reverse the order of bits in an integer

function decToBin(n){
    let ans='';
    let num = n;
    while(num>0){
        let rem = n%2;
        num = Math.floor(num/2);  // to avoid taking decimal
        ans= rem + ans;
    } 
    return ans;
}

function reverseBinaryNumber(n){
    let binary = decToBin(n);
    console.log(binary);
    let x  = binary.length; 
    for(let i=0 ; i< 8-x; i++){
        binary = '0'+binary;
    }
    console.log(binary);
    let binaryArray = binary.split("");
   
    return parseInt( binaryArray.reverse().join(""),2);
}

console.log(reverseBinaryNumber(12));