var BinarySearchTree = function(value) {
  let root = new bstNode(value || null);
  _.extend(root, bstMethods);
  return root;
};

var bstNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var bstSearch = function(node) {
    if (node.value === null) {
      node.value = value;
    } else if (node.value > value) {
      if (node.left === null) {
        node.left = new bstNode(value);
        return;
      } else {
        bstSearch(node.left);
      }
    } else if (node.value < value) {
      if (node.right === null) {
        node.right = new bstNode(value);
        return;
      } else {
        bstSearch(node.right);
      }
    }
  };
  bstSearch(this);
};

bstMethods.contains = function(value) {
  var bstSearch = function(node) {
    if (node.value === value) {
      return true;
    } else if (node.value > value) {
      if (node.left !== null) {
        return bstSearch(node.left);
      }
    } else if (node.value < value) {
      if (node.right !== null) {
        return bstSearch(node.right);
      }
    }
    return false;
  };
  return bstSearch(this);
};

bstMethods.depthFirstLog = function(callback) {
  if (!callback) {
    return false;
  }

  var bstSearch = function(node) {
    callback(node.value);
    if (node.left !== null) {
      bstSearch(node.left);
    }
    if (node.right !== null) {
      bstSearch(node.right);
    }
  };

  bstSearch(this);
};

// bstMethods.breadthFirstLog = function(value) {
//   var bstSearch = function(node) {
//     let headDiff = Math.abs(value - node.value);
//     let leftDiff = Math.abs(value - node.left);
//     let rightDiff = Math.abs(value - node.right);

//     if (node.value === value) {
//       return node.value;
//     }
//   };
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert() -> O(logn)
 * .contains() -> O(logn)
 * .depthFirstLog() -> O(n)
 */
