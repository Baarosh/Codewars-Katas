// As you may know, once women pass their teens, they should only be celebrated for their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if she turns 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

// Examples:
// 32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"

function womensAge(n) {
  for (let i = 11; i < n; i++) {
    if (2 * i === n) return `${n}? That's just 20, in base ${i}!`
    if (2 * i + 1 === n) return `${n}? That's just 21, in base ${i}!`
  }
}

console.log(womensAge(32), "32? That's just 20, in base 16!")
console.log(womensAge(39), "39? That's just 21, in base 19!")
console.log(womensAge(22), "22? That's just 20, in base 11!")
console.log(womensAge(65), "65? That's just 21, in base 32!")
console.log(womensAge(83), "83? That's just 21, in base 41!")
