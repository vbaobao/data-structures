var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.key = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // Zero indexed
  this[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  if (this.key > 0) {
    this.key--;
  }
  let temp = this[this.key];
  delete this[this.key];
  return temp;
};

stackMethods.size = function () {
  return this.key;
};