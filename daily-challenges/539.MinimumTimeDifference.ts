/* 
539. Minimum Time Difference

Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 

Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1


Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0

*/

function findMinDifference(timePoints: string[]): number {
  // Convert time in "HH:MM" to total minutes since midnight
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Convert each time point to minutes and sort them
  const minutesArray = timePoints.map(convertToMinutes).sort((a, b) => a - b);

  let minDifference = Infinity;

  // Compare each consecutive time point
  for (let i = 1; i < minutesArray.length; i++) {
    const difference = minutesArray[i] - minutesArray[i - 1];
    minDifference = Math.min(minDifference, difference);
  }

  // Handle circular case between the first and last time points
  const circularDifference =
    1440 + minutesArray[0] - minutesArray[minutesArray.length - 1];
  minDifference = Math.min(minDifference, circularDifference);

  return minDifference;
}

console.log(findMinDifference(["23:59", "00:00"])); // 1
