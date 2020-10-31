var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(set._limit);

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item === '') {
    return;
  }

  var index = getIndexBelowMaxForKey(item, this._limit);
  let bucket = this._storage.get(index);

  if (bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  bucket.push([item, item]);
};

setPrototype.contains = function(item) {
  if (item === '') {
    return false;
  }

  var index = getIndexBelowMaxForKey(item, this._limit);
  let bucket = this._storage.get(index);

  for (const i of bucket) {
    if (i[0] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);

  this._storage.each(function(bucket, i) {
    if (i === index) {
      for (const [tupIndex, tuple] of bucket.entries()) {
        if (tuple[0] === item) {
          bucket.splice(tupIndex, 1);
        }
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .add() --> O(1)
 * .contains() --> O(1)
 * .remove() --> O(1)
 */
