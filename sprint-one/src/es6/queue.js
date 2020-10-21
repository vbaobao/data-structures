class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.firstKey = 0;
    this.lastKey = 0;
    this.qSize = 0;
  }

  enqueue(value) {
    this[this.lastKey] = value;
    this.lastKey++;
    this.qSize++;
  }

  dequeue() {
    let temp = this[this.firstKey];
    delete this[this.firstKey];
    this.firstKey++;
    if (this.qSize > 0) {
      this.qSize--;
    }
    return temp;
  }

  size() {
    return this.qSize;
  }

}
