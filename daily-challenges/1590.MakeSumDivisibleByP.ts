/* 
1590. Make Sum Divisible by P

Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

 
Example 1:

Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
Example 2:

Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
Example 3:

Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
*/

function minSubarray(nums: number[], p: number): number {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  const totalMod = totalSum % p;

  // If the sum is already divisible by p
  if (totalMod === 0) return 0;

  const prefixModMap = new Map<number, number>();
  // To handle cases where we remove from the start
  prefixModMap.set(0, -1);
  let prefixSum = 0;
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const currentMod = prefixSum % p;
    const targetMod = (currentMod - totalMod + p) % p;

    if (prefixModMap.has(targetMod)) {
      const subarrayStartIndex = prefixModMap.get(targetMod)!;
      minLength = Math.min(minLength, i - subarrayStartIndex);
    }

    // Store the current prefix mod and index
    prefixModMap.set(currentMod, i);
  }

  return minLength < nums.length ? minLength : -1;
}

console.log(minSubarray([3, 1, 4, 2], 6)); // 1
console.log(minSubarray([6, 3, 5, 2], 9)); // 2
console.log(minSubarray([1, 2, 3], 3)); // 0
