/* 
2707. Extra Characters in a String

You are given a 0-indexed string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.

Return the minimum number of extra characters left over if you break up s optimally.

Example 1:

Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
Output: 1
Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.

Example 2:

Input: s = "sayhelloworld", dictionary = ["hello","world"]
Output: 3

Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.
 */

function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length;
  const dictSet = new Set(dictionary);

  // dp[i] will store the minimum extra chars to parse s[0..i-1]
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    // Initialize dp[i] to the worst case: i extra characters
    dp[i] = dp[i - 1] + 1;

    // Check if there's any dictionary word that ends at position i-1
    for (let word of dictSet) {
      const len = word.length;
      if (i >= len && s.slice(i - len, i) === word) {
        dp[i] = Math.min(dp[i], dp[i - len]);
      }
    }
  }

  return dp[n];
}

console.log(minExtraChar("leetscode", ["leet", "code", "leetcode"])); // 1

console.log(minExtraChar("sayhelloworld", ["hello", "world"])); // 3

console.log(
  minExtraChar("dwmodizxvvbosxxw", [
    "ox",
    "lb",
    "diz",
    "gu",
    "v",
    "ksv",
    "o",
    "nuq",
    "r",
    "txhe",
    "e",
    "wmo",
    "cehy",
    "tskz",
    "ds",
    "kzbu",
  ])
); // 7
