var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let isDup = false;
  for (let child of this.children) {
    if (child.value === value) {
      isDup = true;
    }
  }
  if (!isDup) {
    this.children.push(Tree(value));
  }
};



// treeMethods.contains = function(target) {

//   let helperFunc = function(object, target) {
//     if (object.value === target) {
//       return true;

//     } else if (object.children.length) {
//       for (let child of object.children) {

//         if (helperFunc(child, target)) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };

//   return helperFunc(this, target);
// };

treeMethods.contains = function(target) {
  let result = false;

  let innerFunc = function(obj, target) {
    if (obj.value === target) {
      result = true;

    }
    for (let child of obj.children) {
      innerFunc(child, target);
    }
    return result;
  };
  return innerFunc(this, target);
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild() --> O(n) if checing for duplicate children, O(1) if directly pushed to T
 contain() -->  O(n^2)???
 */
