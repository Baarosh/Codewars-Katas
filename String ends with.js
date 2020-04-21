// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.slice(str.length - ending.length) == ending
}

console.log(solution('abc', 'bc'), true)
console.log(solution('abc', 'd'), false)
console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
