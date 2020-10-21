var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastKey = 0;
  var firstIn = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastKey] = value;
    lastKey++;
    size++;
  };

  someInstance.dequeue = function() {
    let temp = storage[firstIn];
    delete storage[firstIn];
    firstIn++;
    if (size > 0) {
      size--;
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};