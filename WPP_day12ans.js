// Reversing a String

function string_reverse(str)
{
    let newString = "";
    for(let i=str.length-1;i>=0;i--)
        newString+=str[i];
    return newString;
}

const name= 'Sabyasachi Sahani';
const nameReverse = string_reverse(name);
console.log(nameReverse);