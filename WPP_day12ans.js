// Reversing a String

function string_reverse(str)
{
    let newString = "";
    for(let i=str.length-1;i>=0;i--)
        newString+=str[i];
    return newString;
}

const oldName= 'Sabyasachi Sahani';
const nameReverse = string_reverse(oldName);
console.log(nameReverse);