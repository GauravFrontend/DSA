// what is recursion 
// -> khud hi wapas wapas call krne , calling a self function --- khai pr to koi check bhi lga hoga , to avoid loop
// -> describning and action interm of itself

// recurssion uses stack memory

// recursive funtion calles itself

// stack mai function k upr function jab tak return na ho ek ek krke return hota hai 
// humesha jo function call krta h return value ussi ko jati hai 

// focus should be on unwinding


// Reverse a String 
// string ki length starts from 1

function reverseString(string) {
    let reverse = ""
    let length = string.length - 1
    while (length >= 0) {
        console.log(length, string.length, string[length]);
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse
}

// console.log(reverseString("hello"));


// function recursiveReverseString(string){
//     // base case
//     if (string === "") {
//         return string
//     }
//     console.log(string,"jo bhi string h",string[string.length - 1]);
//     return string[string.length -1] + recursiveReverseString(string.substring(0, string.length -1))
// }

// console.log(recursiveReverseString("Arhu"));


function recursiveReverseString(string, callNumber = 1) {
    console.log(`Call number ${callNumber}: current string: '${string}'`);

    // Base case
    if (string === "") {
        console.log(`Call number ${callNumber}: Base case reached with string: '${string}'`);
        console.log(`Call number ${callNumber}: Returning '---'`);
        return "---";
    }

    // Recursively reverse the string
    let reversePart = recursiveReverseString(string.substring(0, string.length - 1), callNumber + 1);
    let result = string[string.length - 1] + reversePart;

    console.log(`Call number ${callNumber}: Reversing: Last char: '${string[string.length - 1]}' added in front of '${reversePart}' to form a result: '${result}'`);
    console.log(`Call number ${callNumber}: Returning '${result}'`);

    return result;
}

// console.log(recursiveReverseString('Hello'));

// count vowels in a string

function isVowel(character) {
    let lowerChar = character.toLowerCase()
    let vowels = "aeiou"

    if (vowels.indexOf(lowerChar) != -1) {
        return true
    }
    else {
        return false
    }
}

function countVowels(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            count += 1
        }
        return count
    }
}

// console.log(countVowels("aeio"));



function recursiveCountVowels(string, stringLength){

    if (stringLength == 1) {
        return Number(isVowel(string[0]))
    }

    return recursiveCountVowels(string, string.length - 1) + isVowel(string[stringLength - 1])
}

// 17:41