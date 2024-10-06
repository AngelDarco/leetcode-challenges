/* 
1371. Find the Longest Substring Containing Vowels in Even Counts

Given the string s, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

Example 1:

Input: s = "eleetminicoworoep"
Output: 13
Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.

Example 2:

Input: s = "leetcodeisgreat"
Output: 5
Explanation: The longest substring is "leetc" which contains two e's.
Example 3:

Input: s = "bcbcbc"
Output: 6
Explanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.
*/

function findTheLongestSubstring(s: string): number {
  let maxLength = 0;
  let mask = 0;

  // Map to store the index of the first occurrence of each vowel
  const seen = new Map<number, number>();

  // Map to store the masks for each vowel
  const vowelMask: { [key: string]: number } = {
    a: 1 << 0,
    e: 1 << 1,
    i: 1 << 2,
    o: 1 << 3,
    u: 1 << 4,
  };

  // Initialize the map with mask 0 at index -1
  seen.set(0, -1);

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // Update the mask based on the current vowel
    if (ch in vowelMask) {
      mask ^= vowelMask[ch];
    }

    // If we've seen this mask before, calculate the length of the substring
    if (seen.has(mask)) {
      maxLength = Math.max(maxLength, i - seen.get(mask)!);
    } else {
      // Otherwise, store the first occurrence of this mask
      seen.set(mask, i);
    }
  }

  return maxLength;
}

console.log(findTheLongestSubstring("eleetminicoworoep")); // 13

console.log(findTheLongestSubstring("leetcodeisgreat")); // 5
