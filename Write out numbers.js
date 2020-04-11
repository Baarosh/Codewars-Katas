/* Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

Examples
number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"*/

function number2words(n) {
  const digitOne = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const digitTwoFirsts = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  const digitTwoOthers = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]
  n = n
    .toString()
    .split('')
    .map((n) => parseInt(n))

  const getTens = (a, b) => {
    if (a == 0) return digitOne[b]
    else if (a == 1) return digitTwoFirsts[b]
    else {
      if (b > 0) return `${digitTwoOthers[a - 2]}-${digitOne[b]}`
      else return digitTwoOthers[a - 2]
    }
  }

  const getHundreds = (a) => {
    if (a > 0) return `${digitOne[a]} hundred`
    else return ''
  }

  const getThousands = (a, b) => `${getTens(a, b)} thousand`

  if (n.length == 1 && n[0] == 0) return 'zero'
  else if (n.length == 1) return getTens(0, n[0])
  else if (n.length == 2) return getTens(n[0], n[1])
  else if (n.length == 3)
    return (getHundreds(n[0]) + ' ' + getTens(n[1], n[2]))
      .trim()
      .split(' ')
      .filter((n) => n)
      .join(' ')
  else if (n.length == 4)
    return (
      getThousands(0, n[0]) +
      ' ' +
      getHundreds(n[1]) +
      ' ' +
      getTens(n[2], n[3])
    )
      .trim()
      .split(' ')
      .filter((n) => n)
      .join(' ')
  else if (n.length == 5)
    return (
      getThousands(n[0], n[1]) +
      ' ' +
      getHundreds(n[2]) +
      ' ' +
      getTens(n[3], n[4])
    )
      .trim()
      .split(' ')
      .filter((n) => n)
      .join(' ')
  else if (n.length == 6)
    return (
      getHundreds(n[0]) +
      ' ' +
      getThousands(n[1], n[2]) +
      ' ' +
      getHundreds(n[3]) +
      ' ' +
      getTens(n[4], n[5])
    )
      .trim()
      .split(' ')
      .filter((n) => n)
      .join(' ')
}

console.log(number2words(0))
console.log(number2words(1))
console.log(number2words(9))
console.log(number2words(30))
console.log(number2words(17))
console.log(number2words(25))
console.log(number2words(97))
console.log(number2words(100))
console.log(number2words(137))
console.log(number2words(798))
console.log(number2words(5111))
console.log(number2words(1011))
// console.log(number2words(9555))
// console.log(number2words(15321))
// console.log(number2words(903456))
