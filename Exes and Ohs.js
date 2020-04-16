// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let os = 0,
    xs = 0
  str.split('').forEach((s) => {
    if (s.toLowerCase() === 'o') os++
    if (s.toLowerCase() === 'x') xs++
  })
  return os == xs
}

console.log(XO('xo'), true)
console.log(XO('xxOo'), true)
console.log(XO('xxxm'), false)
console.log(XO('Oo'), false)
console.log(XO('ooom'), false)
