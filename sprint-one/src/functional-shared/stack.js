var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.key = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.key++;
  this[this.key] = value;
};

stackMethods.pop = function() {
  let temp = this[this.key];
  delete this[this.key];
  if (this.key > 0) {
    this.key--;
  }
  return temp;
};

stackMethods.size = function() {
  return this.key;
};


