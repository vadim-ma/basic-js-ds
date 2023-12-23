const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list = null;

  getUnderlyingList() {
    const queue = new Queue;
    let cur = this.list;
    while (cur) {
      queue.enqueue(cur.value);
      cur = cur.next;
    }

    return queue.list;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.list) {
      node.next = this.list;
    }
    this.list = node;
  }

  dequeue() {
    let cur = this.list;
    let prev = null;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    if (prev) {
      prev.next = null
    } else {
      this.list = null;
    }
    return cur.value;
  }
}

module.exports = {
  Queue
};

const queue = new Queue();
const values =[337,387,667,407,869,379,307,699,774,58,40,624];
values.forEach(value => queue.enqueue(value));
for (let i = 0; i < 2; i++){
  console.log(queue.dequeue())
} 
console.log(JSON.stringify(queue.getUnderlyingList()));