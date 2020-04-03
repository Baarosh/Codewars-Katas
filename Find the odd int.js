/* Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
  A = A.sort((a, b) => a - b)

  while (A.length > 1) {
    const num = A.findIndex(n => n !== A[0])
    if (num % 2 === 1) break
    else A.splice(0, num)
  }
  return A[0]
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))
