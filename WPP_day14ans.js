function cutOff(str){
    if(str.length%2==0)
        return str.slice(0,str.length/2);
    else
        console.log("Give an even numbered word");
}
console.log(cutOff("MainTeri"));
console.log(cutOff("MainTeriAak"));
console.log(cutOff("RoadieBanegaTu?"));


