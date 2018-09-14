class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let i = 0;
    indices.sort();
    const sortedArray = this.arr.filter((currentValue, index) => index === indices.find(indexValue => indexValue === index));
    this.comparator ? sortedArray.sort(this.comparator) : sortedArray.sort((a, b) => a - b);
    return this.arr = this.arr.map((currentValue, index) => index === indices[i] ? sortedArray[i++] : currentValue);
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;