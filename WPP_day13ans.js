function count_Vowel(str){
    let allVowels = 'aeiouAEIOU';
    let count=0;
    for(i in str)
        if(allVowels.indexOf(str[i])!== -1)
            ++count;
    return count;
}

console.log(count_Vowel('Sabyasachi'));
console.log(count_Vowel('ZZZ'));
console.log(count_Vowel('Floccinaucinihilipilification'));
console.log(count_Vowel(''));


