// Strict or Soft Mode for more than 3 arguments

function number_check(x,y,z)
{
    if(y>x && z>y)
        return "Strict Mode"
    else if(y <=x && x<z)
        return "Soft Mode"
    else 
       return "Undefined pattern"
}

console.log(number_check(50,51,52));
console.log(number_check(50,49,51));
console.log(number_check(50,50,50));
console.log(number_check(50,48,49));


