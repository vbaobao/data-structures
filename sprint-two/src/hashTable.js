var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);

  if (bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  for (const tuple of bucket) {
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);

  for (const i of bucket) {
    if (i[0] === k) {
      return i[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(bucket, i) {
    if (i === index) {
      for (const [tupIndex, tuple] of bucket.entries()) {
        if (tuple[0] === k) {
          bucket.splice(tupIndex, 1);
        }
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 .insert(), .retrieve(), .remove() ---> O(1)
 */