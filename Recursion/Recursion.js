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

function reverseString(string){
    let reverse = ""
    let length = string.length -1
    while (length>=0) {
        console.log(length,string.length,string[length]);
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse
}

// console.log(reverseString("hello"));


function recursiveReverseString(string){
    // base case
    if (string === "") {
        return string
    }
    console.log(string,"jo bhi string h",string[string.length - 1]);
    return string[string.length -1] + recursiveReverseString(string.substring(0, string.length -1))
}

console.log(recursiveReverseString("Arhu"));