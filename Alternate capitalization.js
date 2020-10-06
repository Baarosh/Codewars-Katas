// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  const w1 = s
    .split('')
    .map((l, i) => (i % 2 == 0 ? l.toUpperCase() : l))
    .join('')
  const w2 = s
    .split('')
    .map((l, i) => (i % 2 != 0 ? l.toUpperCase() : l))
    .join('')

  return Array(w1, w2)
}

console.log(capitalize('abcdef'))
