function isPalindrome(string) {
    console.log(`Checking string: "${string}"`);
    console.log(`String length: ${string.length}`);
    
    // Base case: if the string is empty or has one character, it's a palindrome
    if (string.length <= 1) {
        console.log("Base case met. Returning true.");
        return true;
    }
    
    // Check if the first and last characters are the same
    if (string[0] === string[string.length - 1]) {
        console.log(`First character "${string[0]}" is equal to last character "${string[string.length - 1]}"`);
        // Recursively check the substring excluding the first and last characters
        return isPalindrome(string.substring(1, string.length - 1));
    } else {
        // If the first and last characters do not match, it's not a palindrome
        console.log(`First character "${string[0]}" is not equal to last character "${string[string.length - 1]}"`);
        console.log("Returning false.");
        return false;
    }
}

// Test the function with some example strings
console.log(isPalindrome("madam"));   // true

