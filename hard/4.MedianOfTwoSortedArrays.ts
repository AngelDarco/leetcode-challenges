/* 
4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = arr.length;
  let res = arr[0];

  if (len > 1) {
    if (len % 2 === 0) {
      res = (arr[len / 2 - 1] + arr[len / 2]) / 2;
    } else {
      res = arr[(len - 1) / 2];
    }
  }

  return res;
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2.00000 (1 + 2) / 2 = 1.5
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.50000 (2 + 3) / 2 = 2.5
console.log(findMedianSortedArrays([], [1])); // 1.00000
