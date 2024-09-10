/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums: number[]): number {
  let counter = 1,
    candidate = nums[0];

  nums.map((_, i) => {
    if (counter === 0) {
      candidate = nums[i + 1];
    }
    if (candidate === nums[i + 1]) {
      counter++;
    } else counter--;
  });
  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

console.log(majorityElement([3, 2, 3])); // 3

console.log(majorityElement([-1, 1, 1, 1, 2, 1])); // 1

console.log(majorityElement([6, 6, 6, 7, 7])); // 6
