let numbers = [1, 2, 3, 4];

let doubled = numbers.filter((ele) => ele % 2 != 0);

let doubleOdd = doubled.map((n) => n * 2);

console.log(doubleOdd);
