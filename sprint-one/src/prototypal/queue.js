var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.firstKey = 0;
  queue.lastKey = 0;
  queue.qSize = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.lastKey] = value;
  this.lastKey++;
  this.qSize++;
};

queueMethods.dequeue = function() {
  let temp = this[this.firstKey];
  delete this[this.firstKey];
  this.firstKey++;
  if (this.qSize > 0) {
    this.qSize--;
  }
  return temp;
};

queueMethods.size = function() {
  return this.qSize;
};