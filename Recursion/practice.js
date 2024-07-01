
function recursiveName(name, times) {
    if (times == 0) {
        return name
    }
    const response = recursiveName(name, times - 1)
    console.log(response);
    return name
}

// recursiveName("heelo",5)
// print 1 to n

function recursive1toN(number) {
    if (number == 1) {
        console.log(number);
        return number
    }
    recursive1toN(number - 1)
    console.log(number);
    return number

}

// recursive1toN(5)

// print n to 1

function recursiveNto1(number) {
    if (number == 1) {
        console.log(number);
        return number
    }
    recursiveNto1(number - 1)
    console.log(number);
    return number

}

// recursiveNto1(6)

/// climb stairs , you can take 2 or 1 step , find all the posible ways to in number like there are 3 ways

var climbStairs = function (n) {
    if (n < 0) {
        return 1
    }
    if (n == 0) {
        return 1
    }

    return climbStairs(n - 1) + climbStairs(n - 2)
};

// console.log(climbStairs(3));

// say digits 234, two three four

function digitToWord(digit) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[digit];
}

function verbalizeNumber(number) {
    // Convert the number to string to handle each digit
    const numberStr = number.toString();

    function recursiveHelper(index) {
        if (index >= numberStr.length) {
            return;
        }

        // Convert current character to its verbal representation
        const digitWord = digitToWord(parseInt(numberStr[index]));
        console.log(digitWord);

        // Recursive call for the next digit
        recursiveHelper(index + 1);
    }

    // Start recursion from the first digit
    recursiveHelper(0);
}

// Example usage
// verbalizeNumber(789798);


// function digitToWord(digit) {
//     const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     return words[digit];
// }


function saynumber(number) {

    const toSTring = number.toString()
    function recursiohHeloper(index) {
        if (index >= toSTring.length) {
            return;
        }
        const namee = digitToWord(Number(toSTring[index]))
        console.log(namee);
        return recursiohHeloper(index + 1)
    }
    recursiohHeloper(0)

}

// saynumber(5465)


function isSorted(arr, index = 0) {
    // Base case: An array with 0 or 1 elements is sorted
    if (index >= arr.length - 1) {
        return true;
    }

    // Recursive case: Compare the current element with the next
    if (arr[index] > arr[index + 1]) {
        return false;
    }

    // Recursively check the rest of the array
    return isSorted(arr, index + 1);
}

// Example usage
// console.log(isSorted([1, 2, 3, 6, 5])); // Output: true


function containsThatNumber(arr,num,index = 0){
    if (index>=arr.length) {
        return false
    }
    if(arr[index] == num){
        return true
    }
    return containsThatNumber(arr,num, index + 1)
}

// console.log(containsThatNumber([3,5,4,6,6,7],4));

// binary search with recursion 

function binarySearch(arr, num, start = 0, end = arr.length - 1) {
    // Base case: If the start index exceeds the end index, return false
    if (start > end) {
        return false;
    }

    // Calculate the middle index
    const mid = Math.floor((start + end) / 2);

    // Check if the middle element is the number we're looking for
    if (arr[mid] === num) {
        return true;
    }

    // If the number is smaller than the middle element, search in the left half
    if (num < arr[mid]) {
        return binarySearch(arr, num, start, mid - 1);
    }

    // If the number is larger than the middle element, search in the right half
    return binarySearch(arr, num, mid + 1, end);
}

// Example usage
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: true


function something(num, target, start=0, end = num.length-1){

    if(start>end){
        return false
    }
    const mid = Math.floor((start+end)/2)
    if (num[mid]==target) {
        return true
    }
    if (target<num[min]) {
        return something(num, target, start, mid-1)
    }
    if (target>num[min]) {
        return something(num,target,mid+1, end)
    }


}