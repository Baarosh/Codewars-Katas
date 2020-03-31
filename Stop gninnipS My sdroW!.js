function spinWords(str) {
  let arrayWithWords = str.split(' ')
  let newArray = []
  arrayWithWords.forEach(word => {
    if (word.length >= 5) {
      newArray.push(
        word
          .split('')
          .reverse()
          .join('')
      )
      newArray.push(' ')
    } else {
      newArray.push(word)
      newArray.push(' ')
    }
  })
  return newArray.join('').trim()
}

console.log(spinWords('Hey Polaczki'))
