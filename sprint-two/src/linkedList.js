var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

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
    if (!this.head) {
      return false;
    }

    let temp = this.head;
    this.head = this.head.next;

    return temp.value;
  };

  list.contains = function(target) {
    if (!this.head) {
      return false;
    }

    while (this.head) {
      if (this.head.value === target) {
        return true;

      } else {
        this.head = this.head.next;
      }
    }

    return false;
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
  list.addToTail -> O(1)
  list.removeHead -> O(1)
  list.contains -> O(n)
 */
