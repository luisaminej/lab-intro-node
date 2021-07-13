class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items = this.items.sort((a,b) => (a - b))

  }

  get(pos) {
 if(this.items[pos]) {
   return this.items[pos]

 } else {
   throw new Error ("OutOfBounds");
 }

 }
  max() {
   if(this.items.length === 0){
    throw new Error('EmptySortedList');
  } else { 
    return this.items[this.items.length -1]
  }

}

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else { 
      return this.items[0]
    }
  }

  sum() {
    if(this.length !== 0) {
      return this.items.reduce((a,b) => a + b)
  } else {
    return 0;
  }
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return ((this.items.reduce((a,b) => a + b ))/ this.length)

    }
  }
}

module.exports = SortedList;
