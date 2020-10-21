var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
};


Stack.prototype.push = function(value) {
  // Zero indexed
  this[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function() {
  if (this.key > 0) {
    this.key--;
  }
  let temp = this[this.key];
  delete this[this.key];
  return temp;
};

Stack.prototype.size = function() {
  return this.key;
};