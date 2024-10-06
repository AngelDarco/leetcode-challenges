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
  // Step 1: Reverse the string
  const reverse = s.split("").reverse().join("");

  // Step 2: Combine the original string and its reverse using a special character (#)
  const combined = s + "#" + reverse;

  // Step 3: Build the LPS (Longest Prefix Suffix) array
  const buildLPS = (str: string): number[] => {
    const lps = new Array(str.length).fill(0); // Initialize LPS array with zeros
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1; // Start from the second character

    // Loop through the string to build the LPS array
    while (i < str.length) {
      if (str[i] === str[len]) {
        len++; // Increment the length of the matching prefix and suffix
        lps[i] = len; // Update the LPS value for the current position
        i++; // Move to the next character
      } else {
        if (len !== 0) {
          // If mismatch occurs, update the length to the value of the previous LPS
          len = lps[len - 1];
        } else {
          lps[i] = 0; // If there's no match and len is 0, LPS is 0 for this position
          i++; // Move to the next character
        }
      }
    }
    return lps;
  };

  // Compute the LPS array for the combined string
  const lps = buildLPS(combined);

  // Step 4: Find the longest palindromic prefix length
  const longestPalindromicPrefix = lps[lps.length - 1];

  // Step 5: Add the necessary characters from the reverse string
  const toAdd = reverse.slice(0, reverse.length - longestPalindromicPrefix);

  // Step 6: Return the shortest palindrome
  return toAdd + s;
}

console.log(shortestPalindrome("aacecaaa")); // Output: "aaacecaaa"
console.log(shortestPalindrome("abcd")); // Output: "dcbabcd"
