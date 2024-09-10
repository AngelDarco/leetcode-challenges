/* 
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 
Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

*/

function canJump(nums: number[]): number {
  let minJ = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 >= nums.length - 1) {
      minJ.push(nums[i]);
      console.log(minJ, i, nums[i]);
    }
  }

  return Math.min(...minJ);
}

console.log(canJump([2, 3, 1, 1, 4])); // 2

// console.log(canJump([2, 3, 0, 1, 4])); // 2
// console.log(canJump([2, 1])); // 1
// console.log(canJump([1, 2, 3])); // 2
