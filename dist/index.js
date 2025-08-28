"use strict";
/**
 * Codewars Challenge: Persistent Bugger (6 kyu)
 *
 * Problem Description:
 * Write a function that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * Examples:
 * - persistence(39)  → 3  (3×9=27, 2×7=14, 1×4=4, total: 3 multiplications)
 * - persistence(999) → 4  (9×9×9=729, 7×2×9=126, 1×2×6=12, 1×2=2, total: 4 multiplications)
 * - persistence(4)   → 0  (already single digit, no multiplication needed)
 *
 * Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram2 = isIsogram2;
exports.getSum = getSum;
exports.getSum2 = getSum2;
/**
 * Calculates the multiplicative persistence of a number
 * @param num - The positive integer to calculate persistence for
 * @returns The number of multiplication steps needed to reach a single digit
 */
function persistence(num) {
    // Base case: single digit numbers have persistence of 0
    if (num < 10) {
        return 0;
    }
    // Calculate the product of all digits
    let product = toDigitsArray(num).reduce((a, b) => a * b, 1);
    let steps = 1;
    // Continue multiplying digits until we reach a single digit
    while (product >= 10) {
        steps++;
        product = toDigitsArray(product).reduce((a, b) => a * b, 1);
    }
    return steps;
}
/**
 * Converts a number into an array of its individual digits
 * @param num - The number to convert
 * @returns Array of individual digits
 * @example toDigitsArray(123) → [1, 2, 3]
 */
function toDigitsArray(num) {
    return num.toString().split("").map(Number);
}
// Test cases
console.log("Testing persistence function:");
console.log(`persistence(39): ${persistence(39)}`); // Expected: 3
console.log(`persistence(999): ${persistence(999)}`); // Expected: 4
console.log(`persistence(4): ${persistence(4)}`); // Expected: 0
/**
 * Codewars Challenge: Isogram (7 kyu)
 *
 * Problem Description:
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
 *
 * Examples:
 * - isIsogram("Dermatoglyphics") → true
 * - isIsogram("aba") → false (repeating 'a')
 * - isIsogram("moOse") → false (repeating 'o')
 * - isIsogram("") → true (empty string is considered isogram)
 *
 * Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1
 */
/**
 * Determines if a string is an isogram (no repeating letters)
 * @param str - The string to check (case-insensitive)
 * @returns True if the string is an isogram, false otherwise
 */
function isIsogram(str) {
    // Convert to lowercase for case-insensitive comparison
    const normalizedStr = str.toLowerCase();
    // Use Set to check for unique characters - if Set size equals string length, no duplicates exist
    return new Set(normalizedStr).size === normalizedStr.length;
}
/**
 * Alternative solution for Isogram detection using indexOf method
 * @param str - The string to check (case-insensitive)
 * @returns True if the string is an isogram, false otherwise
 * @description This approach uses indexOf to check if each character's first occurrence
 *              matches its current position. If not, it means the character appears earlier.
 */
function isIsogram2(str) {
    // Convert to lowercase for case-insensitive comparison
    const normalizedStr = str.toLowerCase();
    // Check each character's first occurrence position
    for (let i = 0; i < normalizedStr.length; i++) {
        // If current character's first occurrence is not at current position, it's a duplicate
        if (normalizedStr.indexOf(normalizedStr[i]) !== i) {
            return false;
        }
    }
    return true;
}
// Test cases for Solution 1 (Set approach)
console.log("\nTesting isIsogram function (Solution 1 - Set approach):");
console.log(`isIsogram("Dermatoglyphics"): ${isIsogram("Dermatoglyphics")}`); // Expected: true
console.log(`isIsogram("aba"): ${isIsogram("aba")}`); // Expected: false
console.log(`isIsogram("moOse"): ${isIsogram("moOse")}`); // Expected: false
console.log(`isIsogram(""): ${isIsogram("")}`); // Expected: true
console.log(`isIsogram("isogram"): ${isIsogram("isogram")}`); // Expected: true
// Test cases for Solution 2 (indexOf approach)
console.log("\nTesting isIsogram2 function (Solution 2 - indexOf approach):");
console.log(`isIsogram2("Dermatoglyphics"): ${isIsogram2("Dermatoglyphics")}`); // Expected: true
console.log(`isIsogram2("aba"): ${isIsogram2("aba")}`); // Expected: false
console.log(`isIsogram2("moOse"): ${isIsogram2("moOse")}`); // Expected: false
console.log(`isIsogram2(""): ${isIsogram2("")}`); // Expected: true
console.log(`isIsogram2("isogram"): ${isIsogram2("isogram")}`); // Expected: true
/**
 * Codewars Challenge: Beginner Series #3 Sum of Numbers (7 kyu)
 *
 * Problem Description:
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers
 * between and including them and return it. If the two numbers are equal return a or b.
 *
 * Note: a and b are not ordered!
 *
 * Examples:
 * - getSum(1, 0) → 1   (1 + 0 = 1)
 * - getSum(1, 2) → 3   (1 + 2 = 3)
 * - getSum(0, 1) → 1   (0 + 1 = 1)
 * - getSum(1, 1) → 1   (just 1)
 * - getSum(-1, 0) → -1 (-1 + 0 = -1)
 * - getSum(-1, 2) → 2  (-1 + 0 + 1 + 2 = 2)
 *
 * Link: https://www.codewars.com/kata/55f2b110f61eb01779000053
 */
/**
 * Calculates the sum of all integers between two numbers (inclusive)
 * Solution 1: Using a loop to iterate through all numbers
 * @param a - First integer
 * @param b - Second integer
 * @returns Sum of all integers between a and b (inclusive)
 */
function getSum(a, b) {
    if (a === b) {
        return a;
    }
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
}
/**
 * Calculates the sum of all integers between two numbers (inclusive)
 * Solution 2: Using arithmetic sequence formula for better performance
 * @param a - First integer
 * @param b - Second integer
 * @returns Sum of all integers between a and b (inclusive)
 * @description Uses the formula: sum = (first + last) * count / 2
 *              where count = last - first + 1
 */
function getSum2(a, b) {
    if (a === b)
        return a;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    // Arithmetic sequence sum formula: (first + last) * count / 2
    return ((start + end) * (end - start + 1)) / 2;
}
// Test cases
console.log("\nTesting getSum function (Solution 1 - Loop approach):");
console.log(`getSum(1, 0): ${getSum(1, 0)}`); // Expected: 1
console.log(`getSum(1, 2): ${getSum(1, 2)}`); // Expected: 3
console.log(`getSum(0, 1): ${getSum(0, 1)}`); // Expected: 1
console.log(`getSum(1, 1): ${getSum(1, 1)}`); // Expected: 1
console.log(`getSum(-1, 0): ${getSum(-1, 0)}`); // Expected: -1
console.log(`getSum(-1, 2): ${getSum(-1, 2)}`); // Expected: 2
console.log("\nTesting getSum2 function (Solution 2 - Formula approach):");
console.log(`getSum2(1, 0): ${getSum2(1, 0)}`); // Expected: 1
console.log(`getSum2(1, 2): ${getSum2(1, 2)}`); // Expected: 3
console.log(`getSum2(0, 1): ${getSum2(0, 1)}`); // Expected: 1
console.log(`getSum2(1, 1): ${getSum2(1, 1)}`); // Expected: 1
console.log(`getSum2(-1, 0): ${getSum2(-1, 0)}`); // Expected: -1
console.log(`getSum2(-1, 2): ${getSum2(-1, 2)}`); // Expected: 2
