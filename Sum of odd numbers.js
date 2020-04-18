// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  const a = n * (n - 1) + 1
  const arr = [a]

  for (let i = a + 2; i < a + 2 * n; i += 2) arr.push(i)

  return arr.reduce((s, c) => s + c)
}

console.log(rowSumOddNumbers(1), 1)
console.log(rowSumOddNumbers(2), 3 + 5)
console.log(rowSumOddNumbers(3), 7 + 9 + 11)
console.log(rowSumOddNumbers(4), 13 + 15 + 17 + 19)
console.log(rowSumOddNumbers(5), 21 + 23 + 25 + 27 + 29)
console.log(rowSumOddNumbers(42), 74088)
