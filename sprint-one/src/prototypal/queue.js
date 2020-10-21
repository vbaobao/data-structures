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

queueMethods.enqueue = function(value) {};

queueMethods.dequeue = function() {};

queueMethods.size = function() {};