// 0,1,1,2,3,5   last 2 values k sum se next value aati h 

// iterative 

function fibonacci(value){
    let n0 = 0
    let n1 = 1

    for (let i = 0; i < value; i++) {
        temp = n0 + n1
        n0 = n1
        n1 = temp
    }
    return n0
}

// console.log(fibonacci(6));


// recursive below 

// function recursiveFibonacci(value){
//     if (value <=1 ) {
//         return value
//     }
//     return (recursiveFibonacci( value - 1) + recursiveFibonacci(value - 2 ) )
// }

// console.log(recursiveFibonacci(6));



function recursiveFibonacci(value) {
    console.log(`Entering recursiveFibonacci with value: ${value}`);

    if (value <= 1) {
        console.log(`Base case reached with value: ${value}`);
        return value;
    }

    console.log(`Calling recursiveFibonacci with value: ${value - 1}`);
    const fib1 = recursiveFibonacci(value - 1);

    console.log(`Calling recursiveFibonacci with value: ${value - 2}`);
    const fib2 = recursiveFibonacci(value - 2);

    const result = fib1 + fib2;
    console.log(`Returning from recursiveFibonacci with value: ${value}`);
    console.log(`fib(${value - 1}) + fib(${value - 2}) = ${fib1} + ${fib2} = ${result}`);

    return result;
}

console.log("Fibonacci result: ", recursiveFibonacci(5));
