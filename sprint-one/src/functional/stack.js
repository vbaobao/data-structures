var Stack = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {};
  var lastKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[lastKey] = value;
    lastKey++;
  };

  someInstance.pop = function() {
    if (lastKey > 0) {
      lastKey--;
    }
    // Note: let keeps the value rather than reference to the object
    let temp = storage[lastKey];
    delete storage[lastKey];
    return temp;
  };

  someInstance.size = function() {
    return lastKey;
  };

  return someInstance;
};