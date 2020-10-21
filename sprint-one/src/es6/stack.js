class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Note to self: No semi-colon at the ends on constructor and methods

  constructor() {
    this.key = 0;
  }

  push(value) {
    // Zero indexed
    this[this.key] = value;
    this.key++;
  }

  pop() {
    if (this.key > 0) {
      this.key--;
    }
    let temp = this[this.key];
    delete this[this.key];
    return temp;
  }

  size() {
    return this.key;
  }

}