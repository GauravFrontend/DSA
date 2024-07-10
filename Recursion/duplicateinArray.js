// how many duplicates are there in a array

const arr = [1, 2, 4, 3, 4, 5];
const key = 4;

function recursiveOccurence(key, arr, index = 0) {
    // Base case: if the index reaches the length of the array, return 0
    if (index >= arr.length) {
        return 0;
    }
    // Check if the current element matches the key
    if (arr[index] === key) {
        // Increment the count and move to the next element
        return 1 + recursiveOccurence(key, arr, index + 1);
    } else {
        // Move to the next element without incrementing the count
        return recursiveOccurence(key, arr, index + 1);
    }
}
console.log(recursiveOccurence(key, arr));  // Pass the key first, then the array
