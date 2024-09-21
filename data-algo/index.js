let a = '100111010010100010100111000111'
let p = '10100111'

export const string_brute_force = (a, p) => {
  const len_a = a.length
  const len_p = p.length
  const range = len_a - len_p
  let FOUND = false

  if (range < 0) {
    console.log('First string should be longer than second string')
    return [FOUND, null]
  }

  let i = 0
  let j = 0

  for (; i < range; i++) {
    for (; j < len_p; j++) {
      if (a[i + j] !== p[j]) {
        j = 0
        break
      }
    }
    if (j === len_p) {
      FOUND = true
      break
    }
  }

  return [FOUND, FOUND ? i : null]
}

console.log(string_brute_force(a, p))
