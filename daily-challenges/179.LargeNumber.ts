/* 
179. Largest Number

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Example 1:

Input: nums = [10,2]
Output: "210"

Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
 */

function largestNumber(nums: number[]): string {
  // Convert numbers to strings for easier comparison
  const numStrs = nums.map(String);

  // Custom sort comparator: if a + b > b + a, a should come before b
  numStrs.sort((a, b) => (b + a).localeCompare(a + b));

  // Join the sorted array into a single string
  const result = numStrs.join("");

  // Edge case: if the largest number is '0', return '0'
  return result[0] === "0" ? "0" : result;
}

console.log(largestNumber([3, 30, 34, 5, 9]));
// 9534330

console.log(largestNumber([10, 2])); // 210
