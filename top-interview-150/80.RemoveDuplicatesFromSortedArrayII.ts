/* 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(nums: number[]): number {
  let count = 1,
    j = 0;
  const leng = nums.length;

  for (let i = 1; i < leng; i++) {
    if (nums[i] === nums[j]) {
      count++;

      if (count <= 2) {
        j++;
        nums[j] = nums[i];
      }
    } else {
      count = 1;
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); //  [1,1,2,2,3]

/*  // second aproacht
function removeDuplicates(nums: number[]): number {
  const obj: { [key: string]: number } = {},
    k = [],
    j = [],
    leng = nums.length;

  for (let i = 0; i < leng; i++) {
    obj[nums[i]] = (obj[nums[i]] | 0) + 1;
    if (obj[nums[i]] < 3) k.push(nums[i]);
    else j.push(nums[i]);
  }
  const finalArr = k.concat(j);

  for (let i = 0; i < leng; i++) {
    nums[i] = finalArr[i];
  }

  return k.length;
}
*/
