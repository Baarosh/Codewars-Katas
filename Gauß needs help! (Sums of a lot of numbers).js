// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

function f(n) {
  return parseInt(n) == n && n > 0
    ? Array.from({ length: n + 1 }, (v, k) => k).reduce((s, c) => s + c, 0)
    : false
}

console.log(f(100), 5050)
console.log(f(300), 45150)
console.log(f(50000), 1250025000)
console.log(f('n'), false, 'n must be a number')cccc
console.log(f(), false, 'n must be a value')
console.log(f(3.14), false, 'n must be an integer')
