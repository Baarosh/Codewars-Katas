// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  str = str.toLowerCase().split('')

  while (str.length > 0) {
    if (str.indexOf(str.pop()) != -1) return false
  }
  return true
}

console.log(isIsogram('Dermatoglyphics'), true)
console.log(isIsogram('isogram'), true)
console.log(isIsogram('aba'), false, 'same chars may not be adjacent')
console.log(isIsogram('moOse'), false, 'same chars may not be same case')
console.log(isIsogram('isIsogram'), false)
