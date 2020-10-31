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

  // list.contains = function(target) {
  //   if (!this.head) {
  //     return false;
  //   }

  //   let current = this.head;

  //   while (current) {
  //     if (current.value === target) {
  //       return true;

  //     } else {
  //       current = current.next;
  //     }
  //   }

  //   return false;
  // };

  list.contains = function(target) {
    // Helper function
    let recursiveSearch = function (object, target) {
      if (object.value === target) {
        return true;
      } else if (object.next === null) {
        return false;
      } else {
        return recursiveSearch(object.next, target);
      }
    };

    return recursiveSearch(this.head, target);
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?
  list.addToTail -> O(1)
  list.removeHead -> O(1)
  list.contains -> O(n)
 */
