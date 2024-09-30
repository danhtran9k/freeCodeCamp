const test = 'Hi, my name is Andrei'

export const reverse = (str) => {
  if (str.length < 2) return str
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  console.log(result)

  return result
}

export const RUN_reverse = () => {
  reverse(test)
}
