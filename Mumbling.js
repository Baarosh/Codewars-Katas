/* This time no story, no theory. 
The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes 
only letters from a..z and A..Z. */
function accum(s) {
  let counter = 0
  const newArr = []
  const arr = s.toLowerCase().split('')

  arr.forEach(letter => {
    let stng = ''
    for (let i = 0; i <= counter; i++) {
      stng += letter
      if (i === 0) stng = stng.toUpperCase()
    }
    newArr.push(stng)
    counter++
  })
  return newArr.join('-')
}

console.log(accum('abcd'))
// console.log(accum('RqaEzty'))
// console.log(accum('cwAt'))
