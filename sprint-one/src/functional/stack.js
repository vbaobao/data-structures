var Stack = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {};
  var lastKey = 0;
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[lastKey] = value;
    lastKey++;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      lastKey--;
      size--;
    }
    // Note: let keeps the value rather than reference to the object
    let temp = storage[lastKey];
    delete storage[lastKey];
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
