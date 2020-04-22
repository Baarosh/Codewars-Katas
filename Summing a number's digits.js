// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  return number
    .toString()
    .match(/[0-9]/g)
    .reduce((s, c) => Number(s) + Number(c))
}

console.log(sumDigits(10), 1)
console.log(sumDigits(99), 18)
console.log(sumDigits(-32), 5)
