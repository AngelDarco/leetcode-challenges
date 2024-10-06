/* 
731. My Calendar II

You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a triple booking.

A triple booking happens when three events have some non-empty intersection (i.e., some moment is common to all the three events.).

The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), the range of real numbers x such that start <= x < end.

Implement the MyCalendarTwo class:

MyCalendarTwo() Initializes the calendar object.
boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a triple booking. Otherwise, return false and do not add the event to the calendar.
 
Example 1:

Input
["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
Output
[null, true, true, true, false, true, true]

Explanation
MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
myCalendarTwo.book(10, 20); // return True, The event can be booked. 
myCalendarTwo.book(50, 60); // return True, The event can be booked. 
myCalendarTwo.book(10, 40); // return True, The event can be double booked. 
myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
*/

class MyCalendarTwo {
  private bookings: number[][];
  private overlaps: number[][];

  constructor() {
    this.bookings = []; // Stores the regular bookings
    this.overlaps = []; // Stores the double-booked intervals
  }

  book(start: number, end: number): boolean {
    // First, check if the new booking would cause a triple booking
    for (let [overlapStart, overlapEnd] of this.overlaps) {
      if (Math.max(start, overlapStart) < Math.min(end, overlapEnd)) {
        // This would create a triple booking
        return false;
      }
    }

    // Check for overlaps with existing bookings
    for (let [existingStart, existingEnd] of this.bookings) {
      if (Math.max(start, existingStart) < Math.min(end, existingEnd)) {
        // Add the overlap to the overlap list
        this.overlaps.push([
          Math.max(start, existingStart),
          Math.min(end, existingEnd),
        ]);
      }
    }

    // If no triple booking, add the event to the booking list
    this.bookings.push([start, end]);
    return true; // Booking was successful
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

const obj = new MyCalendarTwo();
/* const param_1 = obj.book(10, 20); // True
const param_2 = obj.book(50, 60); // True
const param_3 = obj.book(10, 40); // True
const param_4 = obj.book(5, 15); // False
const param_5 = obj.book(5, 10); // True
const param_6 = obj.book(25, 55); // True

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6); */

const param_1 = obj.book(24, 40); // true
const param_2 = obj.book(43, 50); // true
const param_3 = obj.book(27, 43); // true
const param_4 = obj.book(5, 21); // true
const param_5 = obj.book(30, 40); // false
const param_6 = obj.book(14, 29); // false
const param_7 = obj.book(3, 19); // true
const param_8 = obj.book(3, 14); // false
const param_9 = obj.book(25, 39); // false >>> true
const param_10 = obj.book(6, 19); // false

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6);
console.log(param_7);
console.log(param_8);
console.log(param_9);
console.log(param_10);
