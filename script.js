const arrayObject = {
  //todo : Array Initialization
  arr: [],
  //todo : Push
  addLast: function (item) {
    this.arr.push(item);
  },
  //todo : Pop
  removeLast: function (item) {
    this.arr.pop();
  },
  //todo : Shift
  removeFirst: function () {
    this.arr.shift();
  },
  //todo : Unshift
  addFirst: function (item) {
    this.arr.unshift(item);
  },
  //todo : indexOf
  findIndex: function (item) {
    return `At index ${this.arr.indexOf(item)}`;
  },
  //todo : Find
  findElement: function () {
    return this.arr.find((item) => item > 5);
  },
  //todo : includes
  itContains: function (item) {
    return this.arr.includes(item);
  },
  //todo : filter function
  arrNumberFilter: function () {
    return this.arr.filter((item) => {
      return typeof item === Number;
    });
  },
  //todo : Map Function
  arrMap: function () {
    return this.arr.map((item) => item * 2);
  },
  //todo : Sort
  arrSort: function () {
    return this.arr.sort();
  },
  //todo : Reverse
  arrReverse: function () {
    return this.arr.reverse();
  },
};

// arrayObject.addFirst(6);
// arrayObject.addFirst(4);
// arrayObject.addFirst(5);
// arrayObject.addFirst(2);
// arrayObject.addFirst(3);
// arrayObject.addFirst(1);
// arrayObject.addLast(7);
// arrayObject.addLast("Number");

// console.log(arrayObject.arr);

// arrayObject.removeFirst();
// arrayObject.removeLast();

// console.log(arrayObject.arr);

// console.log(arrayObject.findElement(5));
// console.log(arrayObject.itContains(10));

// arrayObject.arrNumberFilter();

// console.log(...arrayObject.arr);

// console.log(arrayObject.arrMap());

// console.log(arrayObject.findElement());
// console.log(arrayObject.arrSort());
