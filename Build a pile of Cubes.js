/* 
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
mov rdi, 1071225
call find_nb            ; rax <-- 45

mov rdi, 91716553919377
call find_nb            ; rax <-- -1
*/

function findNb(m) {
  let counter = 1
  while (m > 0) {
    m -= Math.pow(counter, 3)
    if (m > 0) counter++
    else break
  }
  return m === 0 ? counter : -1
}

console.log(findNb(1071225))
console.log(findNb(91716553919377))
