/* 
1497. Check If Array Pairs Are Divisible by k

Given an array of integers arr of even length n and an integer k.

We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

Return true If you can find a way to do that or false otherwise.

 

Example 1:

Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
Output: true
Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

Example 2:

Input: arr = [1,2,3,4,5,6], k = 7
Output: true
Explanation: Pairs are (1,6),(2,5) and(3,4).

Example 3:

Input: arr = [1,2,3,4,5,6], k = 10
Output: false
Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.
 */

function canArrange(arr: number[], k: number): boolean {
  let remainderCount = new Map<number, number>();

  // Count the remainders of each element when divided by k
  for (let num of arr) {
    let remainder = ((num % k) + k) % k; // Ensure the remainder is non-negative
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
  }

  // Check if pairs are possible
  for (let [remainder, count] of remainderCount) {
    if (remainder === 0) {
      // If remainder is 0, it must be even (can pair with itself)
      if (count % 2 !== 0) return false;
    } else {
      // Remainder x must pair with remainder k - x
      let complement = k - remainder;
      if (remainderCount.get(complement) !== count) return false;
    }
  }

  return true;
}

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)); // true
console.log(canArrange([1, 2, 3, 4, 5, 6], 7)); // true
console.log(canArrange([1, 2, 3, 4, 5, 6], 10)); // false
console.log(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3)); // true
