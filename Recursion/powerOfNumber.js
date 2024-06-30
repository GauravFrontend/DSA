
// 2 ki power 3 

function powerFinder(value, power) {
    let loop = 0;
    let ans = 1; // Start with 1 for multiplication

    while (loop < power) {
        console.log(`Loop ${loop}: ans=${ans}, value=${value}, power=${power}`);
        ans *= value; // Multiply ans by value in each iteration
        loop++;
    }

    return ans;
}

// console.log(powerFinder(2, 3)); // Expected output: 8 (2^3)


function recursivePowerFinder(value, power){
    if (power === 0) {
        return 1
    }
    else{
        return value * recursivePowerFinder(value, power -1)
    }
}

console.log(recursivePowerFinder(2,3));
