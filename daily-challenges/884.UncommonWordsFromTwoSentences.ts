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

  const words = [...s1.split(" "), ...s2.split(" ")];

  for (let i = 0; i < words.length; i++)
    obj[words[i]] = (obj[words[i]] | 0) + 1;

  for (const word in obj) if (obj[word] === 1) res.push(word);

  return res;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]

console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]
