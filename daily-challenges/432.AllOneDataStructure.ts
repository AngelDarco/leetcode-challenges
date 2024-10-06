/* 
432. All O`one Data Structure

Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

Implement the AllOne class:

AllOne() Initializes the object of the data structure.
inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
Note that each function must run in O(1) average time complexity.

Example 1:

Input
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
Output
[null, null, null, "hello", "hello", null, "hello", "leet"]

Explanation
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "hello"
allOne.inc("leet");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "leet"
 */

class Node {
  count: number;
  keys: Set<string>;
  prev: Node | null;
  next: Node | null;

  constructor(count: number) {
    this.count = count;
    this.keys = new Set();
    this.prev = null;
    this.next = null;
  }
}

class AllOne {
  private countMap: Map<string, number>; // Maps keys to their count
  private bucketMap: Map<number, Node>; // Maps count to the corresponding Node
  private head: Node; // Dummy head of the doubly linked list
  private tail: Node; // Dummy tail of the doubly linked list

  constructor() {
    this.countMap = new Map();
    this.bucketMap = new Map();
    this.head = new Node(0); // Initialize dummy head node
    this.tail = new Node(0); // Initialize dummy tail node
    this.head.next = this.tail; // Connect head and tail
    this.tail.prev = this.head;
  }

  // Increment the count of a key
  inc(key: string): void {
    let oldCount = this.countMap.get(key) || 0;
    let newCount = oldCount + 1;

    this.countMap.set(key, newCount);

    if (oldCount > 0) {
      this.removeKeyFromNode(oldCount, key);
    }

    this.addKeyToNode(newCount, key);
  }

  // Decrement the count of a key
  dec(key: string): void {
    let oldCount = this.countMap.get(key);
    if (oldCount === undefined) return;

    let newCount = oldCount - 1;

    this.removeKeyFromNode(oldCount, key);

    if (newCount === 0) {
      this.countMap.delete(key); // Remove key if count reaches zero
    } else {
      this.countMap.set(key, newCount);
      this.addKeyToNode(newCount, key);
    }
  }

  // Return the key with the maximum count
  getMaxKey(): string {
    if (this.tail.prev === this.head || !this.tail.prev) return ""; // No keys present
    return Array.from(this.tail.prev.keys)[0]; // Get any key from the max node
  }

  // Return the key with the minimum count
  getMinKey(): string {
    if (this.head.next === this.tail || !this.head.next) return ""; // No keys present
    return Array.from(this.head.next.keys)[0]; // Get any key from the min node
  }

  // Helper function to add a key to the appropriate count node
  private addKeyToNode(count: number, key: string): void {
    let node = this.bucketMap.get(count);
    if (!node) {
      node = new Node(count);
      this.bucketMap.set(count, node);
      this.insertNodeAfter(this.getPrevNodeForCount(count), node);
    }
    node.keys.add(key);
  }

  // Helper function to remove a key from a count node
  private removeKeyFromNode(count: number, key: string): void {
    let node = this.bucketMap.get(count);
    if (!node) return;

    node.keys.delete(key);

    if (node.keys.size === 0) {
      this.removeNode(node);
      this.bucketMap.delete(count);
    }
  }

  // Insert a new node after a given node
  private insertNodeAfter(prevNode: Node, newNode: Node): void {
    newNode.prev = prevNode;
    newNode.next = prevNode.next;
    prevNode.next!.prev = newNode;
    prevNode.next = newNode;
  }

  // Remove a node from the doubly linked list
  private removeNode(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  // Helper to get the previous node for the given count
  private getPrevNodeForCount(count: number): Node {
    let current = this.head;
    while (current.next !== this.tail && current.next!.count < count) {
      current = current.next!;
    }
    return current;
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

const obj = new AllOne();

/* console.log(obj.inc("hello"));
console.log(obj.inc("hello"));
console.log(obj.getMaxKey()); // return "hello"
console.log(obj.getMinKey()); // return "hello"
console.log(obj.inc("leet"));
console.log(obj.getMaxKey()); // return "hello"
console.log(obj.getMinKey()); // return "leet"
 */

// ["AllOne","inc","inc","inc","inc","inc","inc","dec", "dec","getMinKey","dec","getMaxKey","getMinKey"]
// [[],["a"],["b"],["b"],["c"],["c"],["c"],["b"],["b"],[],["a"],[],[]]

console.log(obj.inc("a"));
console.log(obj.inc("b"));
console.log(obj.inc("b"));
console.log(obj.inc("c"));
console.log(obj.inc("c"));
console.log(obj.inc("c"));
console.log(obj.dec("b"));
console.log(obj.dec("b"));
console.log(obj.getMinKey()); // return "a"
console.log(obj.dec("a"));
console.log(obj.getMaxKey()); // return "c"
console.log(obj.getMinKey()); // return "c"
