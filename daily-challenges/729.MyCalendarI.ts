/* 
729. My Calendar I

You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.

A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), the range of real numbers x such that start <= x < end.

Implement the MyCalendar class:

MyCalendar() Initializes the calendar object.
boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
 

Example 1:

Input
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]

Explanation
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
*/
class MyCalendar {
  private events: number[][]; // Store all booked events

  constructor() {
    // Initialize an empty list to hold booked events
    this.events = [];
  }

  // Function to book a new event
  book(start: number, end: number): boolean {
    // Check for overlap with existing events
    for (let [existingStart, existingEnd] of this.events) {
      // If the new event overlaps with any existing event, return false
      if (Math.max(start, existingStart) < Math.min(end, existingEnd)) {
        return false; // Overlap found, so booking is not allowed
      }
    }

    // If no overlap, add the event to the calendar
    this.events.push([start, end]); // Store the new event
    return true; // Event is successfully booked
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

var obj = new MyCalendar();
/* var param_1 = obj.book(10, 20); // return True
var param_2 = obj.book(15, 25); // return False
var param_3 = obj.book(20, 30); // return True

console.log(param_1);
console.log(param_2);
console.log(param_3); */

var param_1 = obj.book(47, 50);
var param_2 = obj.book(33, 41);
var param_3 = obj.book(39, 45);
var param_4 = obj.book(33, 42);
var param_5 = obj.book(25, 32);
var param_6 = obj.book(26, 35);
var param_7 = obj.book(19, 25);
var param_8 = obj.book(3, 8);
var param_9 = obj.book(8, 13);
var param_10 = obj.book(18, 27);

console.log(param_1); // True
console.log(param_2); // True
console.log(param_3); // False
console.log(param_4); // False
console.log(param_5); // True
console.log(param_6); // False
console.log(param_7); // True
console.log(param_8); // True
console.log(param_9); // True
console.log(param_10); // False
