function calculate(s: string): number {
  const stack = [] // [res , sign , res , sign ...]

  let res = 0

  let sign = 1
  let merging = 0

  for (const char of s) {
      if (isNumChar(char)) {
          merging = merging * 10 + Number(char)
      }

      if (char === '+' || char === '-') {
          res += sign * merging
          sign = char === '+' ? 1 : -1
          merging = 0
      }

      if (char === '(') {
          stack.push(res)

          stack.push(sign)
          // reset
          sign = 1
          res = 0
      }

      if (char === ')') {
          const right = sign * merging
          
          const bracketSign = stack.pop()
          const left = stack.pop()
          res = left + bracketSign * (res + right)

          merging = 0
      }
  }

  return res + sign * merging
}

const isNumChar = (char: string) => char >= '0' && char <= '9'
