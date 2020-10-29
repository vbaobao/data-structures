var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  for (const i of this._storage.get(index)) {
    if (i[0] === k) {
      i[1] = v;
      return;
    }
  }
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (const i of this._storage.get(index)) {
    if (i[0] === k) {

      return i[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(bucket, i, storage) {
    if (i === index) {
      for (const [tupIndex, tuple] of bucket.entries()) {
        if (tuple[0] === k) {
          bucket.splice(tuple, 1); // WIP
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


