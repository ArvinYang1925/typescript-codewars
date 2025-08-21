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

/**
 * Calculates the multiplicative persistence of a number
 * @param num - The positive integer to calculate persistence for
 * @returns The number of multiplication steps needed to reach a single digit
 */
function persistence(num: number): number {
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
function toDigitsArray(num: number): number[] {
  return num.toString().split("").map(Number);
}

// Test cases
console.log("Testing persistence function:");
console.log(`persistence(39): ${persistence(39)}`); // Expected: 3
console.log(`persistence(999): ${persistence(999)}`); // Expected: 4
console.log(`persistence(4): ${persistence(4)}`); // Expected: 0
