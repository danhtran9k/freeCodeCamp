function LongestWord(sen) {
  let maxLen = 0
  let word = ''
  for (let index = 0; index < sen.length; index++) {
    if (/[a-zA-Z]/.test(sen[index])) {
      word += sen[index]
      maxLen++
    } else {
      if (word.length > maxLen) {
        maxLen = word.length
      }
      word = ''
    }
  }

  return sen
}

// keep this function call here
console.log(LongestWord(readline()))
