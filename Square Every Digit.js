function squareDigits(num) {
  return Number(
    String(num)
      .split('')
      .map((n) => n ** 2)
      .join('')
  )
}

console.log(squareDigits(9119), 811181)
