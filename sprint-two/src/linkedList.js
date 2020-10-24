var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  /*
  let node1 = {
    value: 1,
    next: {
      value: 2,
      next = null;
    }
  }
  */

  list.addToTail = function(value) {
    let instance = new Node(value);

    if (!this.head) {
      this.head = instance;
      this.tail = this.head;
    } else {
      this.tail.next = instance;
      this.tail = instance;
    }
  };

  list.removeHead = function() {
    // if head doesn't exit?! then return false.
    // if head does EXIST, we would set this.head should first be assigned to a separate variable.
    // then this.head should reference this.head.next
    // if this.head.next doesn't exist, set head {};
    // return whatever we assigned to the separate variable.

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
