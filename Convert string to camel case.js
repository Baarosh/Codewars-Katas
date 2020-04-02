/*Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output should 
be capitalized only if the original word was capitalized
 (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"*/

function toCamelCase(str) {
  const reg = new RegExp('[^A-Za-z0-9]')
  return str
    .split(reg)
    .map((word, index) =>
      index !== 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join('')
}

console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))
