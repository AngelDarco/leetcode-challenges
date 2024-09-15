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
  let res = "";
  const vowels: { [key: string]: number } = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in vowels) vowels[s[i]]++;

    if (vowels[s[i]] <= 2) {
      res += s[i];
    }
  }

  console.log(res, vowels);
  return 0;
}

console.log(findTheLongestSubstring("eleetminicoworoep")); // 13
