// Replace letter with succedding letter in a String

function forward(str)
{
    let newStr = [];
    if(str.length!=0)
        for(i in str)
            newStr[i] = str[i];
        console.log(newStr);
}

forward("Sabyasachi");