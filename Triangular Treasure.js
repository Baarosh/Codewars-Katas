// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

//   triangular(0)==0,
//   triangular(2)==3,
//   triangular(3)==6,
//   triangular(-10)==0

// Return the nth triangular number
function triangular(n) {
  return n > 1 ? triangular(n - 1) + n : n == 1 ? 1 : 0
  //   let sum = 0

  //   for (let i = n; i > 0; i--) sum += i
  //   return sum
}

console.log(triangular(2), 3)
console.log(triangular(4), 10)
