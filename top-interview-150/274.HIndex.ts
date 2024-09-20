/* 
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3

Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:

Input: citations = [1,3,1]
Output: 1

 */

function hIndex(citations: number[]): number {
  let n = citations.length;
  let arr = Array(n + 1).fill(0);

  // Count the number of papers with at least i citations
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) {
      arr[n]++;
    } else {
      arr[citations[i]]++;
    }
  }

  // Calculate the h-index
  let hIndex = 0;
  for (let i = n; i >= 0; i--) {
    hIndex += arr[i];
    if (hIndex >= i) {
      return i;
    }
  }
  return 0;
}

console.log(hIndex([3, 0, 6, 1, 5])); // 3

console.log(hIndex([1, 3, 1])); // 1

console.log(hIndex([0])); // 0
console.log(hIndex([1, 2])); // 1
console.log(hIndex([1, 2, 3, 4, 5])); // 3
console.log(hIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5
/* */
