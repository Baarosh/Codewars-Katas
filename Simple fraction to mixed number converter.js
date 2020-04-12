/* Task
Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

[sign]a b/c

where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).

Value ranges
-10 000 000 < x < 10 000 000
-10 000 000 < y < 10 000 000
Examples
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
Note
Make sure not to modify the input of your function in-place, it is a bad practice. */

const gcd = (a, b) => {
  if (!b) return a
  return gcd(b, a % b)
}

function mixedFraction(s) {
  let nums = s.split('/').map((num) => parseInt(num))

  if (nums[1] === 0) throw Error

  let result = nums[0] / nums[1]
  const sign = result > 0 ? true : false

  if (result === parseInt(result)) return result.toString()

  const commonDivisor = Math.abs(gcd(nums[0], nums[1]))
  nums = nums.map((num) => Math.abs(num / commonDivisor))
  result = Math.abs(result)

  if (result < 1) {
    if (sign) return `${nums[0]}/${nums[1]}`
    else return `-${nums[0]}/${nums[1]}`
  }

  const numerator = nums[0] - parseInt(result) * nums[1]
  if (sign) return `${parseInt(result)} ${numerator}/${nums[1]}`
  else return `-${parseInt(result)} ${numerator}/${nums[1]}`
}

console.log(mixedFraction('9/-6'))
console.log(mixedFraction('6/3'))
console.log(mixedFraction('4/1'))
console.log(mixedFraction('0/18891'))
console.log(mixedFraction('6/4'))
