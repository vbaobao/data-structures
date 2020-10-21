var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.key = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function() {};

stackMethods.pop = function() {};

stackMethods.size = function () {};