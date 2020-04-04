/* Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column. */
function multiplicationTable(row, col) {
  let arr = new Array(row).fill('').map(() => new Array(col).fill(''))

  arr.forEach((c, ind) => {
    for (let i = 0; i < c.length; i++) {
      c[i] = (ind + 1) * (i + 1)
    }
  })

  return arr
}

console.log(multiplicationTable(3, 3))
console.log(multiplicationTable(3, 4))
