/* 
2406. Divide Intervals Into Minimum Number of Groups

You are given a 2D integer array intervals where intervals[i] = [lefti, righti] represents the inclusive interval [lefti, righti].

You have to divide the intervals into one or more groups such that each interval is in exactly one group, and no two intervals that are in the same group intersect each other.

Return the minimum number of groups you need to make.

Two intervals intersect if there is at least one common number between them. For example, the intervals [1, 5] and [5, 8] intersect.

Example 1:

Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
Output: 3
Explanation: We can divide the intervals into the following groups:
- Group 1: [1, 5], [6, 8].
- Group 2: [2, 3], [5, 10].
- Group 3: [1, 10].
It can be proven that it is not possible to divide the intervals into fewer than 3 groups.

Example 2:

Input: intervals = [[1,3],[5,6],[8,10],[11,13]]
Output: 1
Explanation: None of the intervals overlap, so we can put all of them in one group.
*/

function minGroups(intervals: number[][]): number {
  const events: [number, number][] = [];

  // Mark the start and end events for each interval
  for (const [left, right] of intervals) {
    // Start of an interval (+1 overlap)
    events.push([left, 1]);
    events.push([right + 1, -1]); // End of an interval (-1 overlap after the right)
  }

  // Sort events: if events are at the same time, process end events (-1) before start events (+1)
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let maxGroups = 0;
  let currentGroups = 0;

  // Sweep through the sorted events and track the current number of overlaps
  for (const [, delta] of events) {
    currentGroups += delta;
    maxGroups = Math.max(maxGroups, currentGroups);
  }

  return maxGroups;
}

console.log(
  minGroups([
    [5, 10],
    [6, 8],
    [1, 5],
    [2, 3],
    [1, 10],
  ])
); // 3

console.log(
  minGroups([
    [1, 3],
    [5, 6],
    [8, 10],
    [11, 13],
  ])
); // 1
