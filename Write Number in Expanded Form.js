/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
  num = num.toString()
  const tab = []
  for (let i = num.length - 1, j = 0; i >= 0; i--, j++) {
    num[i] != 0 ? tab.unshift(num[i] * 10 ** j) : false
  }
  console.log(num)
  return tab.join(' + ')
}

// console.log(expandedForm(12))
// console.log(expandedForm(42))
console.log(expandedForm(70304))
