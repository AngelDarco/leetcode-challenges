/* 
214. Shortest Palindrome

You are given a string s. You can convert s to a 
palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: s = "aacecaaa"
Output: "aaacecaaa"

Example 2:

Input: s = "abcd"
Output: "dcbabcd"
*/
function shortestPalindrome(s: string): string {
  const isPalindrome = (s: string) => s === s.split("").reverse().join("");
  if (isPalindrome(s)) return s;

  let res = "",
    i = s.length - 1;

  while (i >= 0) {
    res += s.slice(i);
    const candidate = res.split("").reverse().join("") + s;

    if (isPalindrome(candidate)) return candidate;
    i--;
  }

  return s;
}

console.log(shortestPalindrome("aacecaaa"));
// "aaacecaaa"

console.log(shortestPalindrome("abcd")); // "dcbabcd"
