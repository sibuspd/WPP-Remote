function cutOff(str){
    if(str.length%2==0)
        console.log(str.slice(0,str.length/2));
    else
        console.log("Give an even numbered word");
}
console.log(cutOff("MainTeri"));
console.log(cutOff("MainTeriAakh"));
console.log(cutOff("RoadieBanegaTu?"));


