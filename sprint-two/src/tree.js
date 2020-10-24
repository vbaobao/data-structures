var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push( Tree(value) );
};



treeMethods.contains = function(target) {

  let helperFunc = function(object, target) {
    if (object.value === target) {
      return true;

    } else if (object.children.length) {
      for (let child of object.children) {

        if (helperFunc(child, target)) {
          return true;
        }
      }
    }
    return false;
  };

  return helperFunc(this, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild() --> O(1)
 contain() -->  O(n^2)???
 */
