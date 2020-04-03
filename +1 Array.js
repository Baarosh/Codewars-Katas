/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6] */

function upArray(arr) {
  if (arr.length === 0 || !arr.every(num => num >= 0 && num < 10)) return null
  else
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] < 9) {
        arr[i]++
        break
      } else if (arr[i - 1] < 9) {
        arr[i] = 0
        arr[i - 1]++
        break
      } else if (i === 1) {
        arr = arr.map(digit => 0)
        arr.unshift(1)
        break
      }
    }
  return arr
}

console.log(upArray([9, 9, 9]))
console.log(upArray([2, 3, 9]))
console.log(upArray([4, 3, 2, 5]))
console.log(upArray([2, 9, 2, 8, 8, 3, 4, 2, 8, 7, 9, 9, 8, 9]))
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]))
