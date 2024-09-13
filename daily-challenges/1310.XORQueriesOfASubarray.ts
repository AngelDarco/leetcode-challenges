/* 
1310. XOR Queries of a Subarray

You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].

For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

Return an array answer where answer[i] is the answer to the ith query.

Example 1:

Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8] 
Explanation: 
The binary representation of the elements in the array are:
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
The XOR values for queries are:
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8

Example 2:

Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
Output: [8,0,4,4]
*/

function xorQueries(arr: number[], queries: number[][]): number[] {
  const len = arr.length;
  const xor = new Array(len).fill(0);
  const res: number[] = [];

  xor[0] = arr[0];
  for (let i = 1; i < len; i++) {
    xor[i] = xor[i - 1] ^ arr[i];
  }

  for (const [left, right] of queries) {
    if (left === 0) {
      res.push(xor[right]);
    } else {
      res.push(xor[right] ^ xor[left - 1]);
    }
  }

  return res;
}

console.log(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ]
  )
); // [2,7,14,8]
/* 
console.log(
  xorQueries(
    [4, 8, 2, 10],
    [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3],
    ]
  )
); // [8,0,4,4]
 */
