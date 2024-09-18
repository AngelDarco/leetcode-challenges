/* 
884. Uncommon Words from Two Sentences
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]

Explanation:

The word "sweet" appears only in s1, while the word "sour" appears only in s2.

Example 2:

Input: s1 = "apple apple", s2 = "banana"

Output: ["banana"]

Explanation: The words "banana" and "apple" are uncommon.

*/

function uncommonFromSentences(s1: string, s2: string): string[] {
  const res: string[] = [],
    obj: { [key: string]: number } = {};

  const arr1 = s1.split(" ");
  const arr2 = s2.split(" ");
  const len = arr1.length < arr2.length ? arr2.length : arr1.length;

  for (let i = 0; i < len; i++) {
    if (!obj[arr1[i]]) obj[arr1[i]] = 1;
    else obj[arr1[i]]++;

    if (!obj[arr2[i]]) obj[arr2[i]] = 1;
    else obj[arr2[i]]++;
  }

  for (const key in obj) {
    if (key !== "undefined") if (obj[key] === 1) res.push(key);
  }

  return res;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]

console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]
