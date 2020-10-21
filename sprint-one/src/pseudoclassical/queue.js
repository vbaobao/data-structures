var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.firstKey = 0;
  this.lastKey = 0;
  this.qSize = 0;
};


Queue.prototype.enqueue = function(value) {
  this[this.lastKey] = value;
  this.lastKey++;
  this.qSize++;
};

Queue.prototype.dequeue = function() {
  let temp = this[this.firstKey];
  this.firstKey++;
  if (this.qSize > 0) {
    this.qSize--;
  }
  return temp;
};

Queue.prototype.size = function() {
  return this.qSize;
};