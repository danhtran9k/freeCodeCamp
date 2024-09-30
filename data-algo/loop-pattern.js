const loop1 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < len; j++) {
      line += '*'
    }
    console.log(line)
  }
}

const loop2 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < i + 1; j++) {
      line += '*'
    }
    console.log(line)
  }
}

const loop3 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < i + 1; j++) {
      line += j + 1
    }
    console.log(line)
  }
}

const loop4 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < i + 1; j++) {
      line += i + 1
    }
    console.log(line)
  }
}

const loop5 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < len - i; j++) {
      line += '*'
    }
    console.log(line)
  }
}

const loop6 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < len - i; j++) {
      line += j + 1
    }
    console.log(line)
  }
}

const loop6b = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j <= i * 2; j++) {
      line += j + 1
    }
    console.log(line)
  }
}

const loop7 = (len, offset = 0) => {
  let offsetLine = ''
  for (let i = 0; i < offset; i++) {
    offsetLine += ' '
  }
  if (len < 2) return offsetLine + '*'
  const lenMax = (len - 1) * 2 + 1

  for (let i = 0; i < len; i++) {
    let line = offsetLine + ''

    for (let j = 0; j < lenMax; j++) {
      const cond = j >= len - i - 1 && j <= len + i - 1
      line = line + (cond ? '*' : ' ')
    }

    console.log(line)
  }
}

const loop8 = (len, offset) => {
  let offsetLine = ''
  for (let i = 0; i < offset; i++) {
    offsetLine += ' '
  }

  if (len < 2) return offsetLine + '*'
  const lenMax = (len - 1) * 2 + 1

  for (let i = 0; i < len; i++) {
    let line = offsetLine + ''

    for (let j = 0; j < lenMax; j++) {
      const cond = i <= j && j <= lenMax - 1 - i
      line = line + (cond ? '*' : ' ')
    }

    console.log(line)
  }
}

const loop9 = (len) => {
  if (len < 2) return '*'
  loop7(len - 1, 1)

  let line = ''
  let lenMax = (len - 1) * 2 + 1
  for (let i = 0; i < lenMax; i++) {
    line += '*'
  }
  console.log(line)

  loop8(len - 1, 1)
}

const loop10 = (len) => {
  loop2(len)

  for (let i = 0; i < len - 1; i++) {
    let line = ''
    for (let j = 0; j < len - 1 - i; j++) {
      line += '*'
    }
    console.log(line)
  }
}

const loop11 = (len) => {
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < i + 1; j++) {
      let cond = j % 2 === i % 2
      line += cond ? '1' : '0'
    }
    console.log(line)
  }
}

const loop13 = (len) => {
  let num = 0

  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < i + 1; j++) {
      num++
      if (j === 0) {
        line += num
      } else {
        line += '-' + num
      }
    }
    console.log(line)
  }
}

const loop17 = (len, offset = 0) => {
  let offsetLine = ''
  for (let i = 0; i < offset; i++) {
    offsetLine += ' '
  }

  if (len < 2) return offsetLine + '1'
  const lenMax = (len - 1) * 2 + 1
  const center = len - 1

  for (let i = 0; i < len; i++) {
    let line = offsetLine + ''
    let numMin = 0

    for (let j = 0; j < lenMax; j++) {
      const cond = j >= len - i - 1 && j <= len + i - 1

      if (!cond) {
        line += '-'
      } else if (j <= center) {
        numMin++
        line += numMin
      } else {
        numMin--
        line += numMin
      }
    }

    console.log(line)
  }
}

const loop21 = (len) => {
  const maxIndex = len - 1
  for (let i = 0; i < len; i++) {
    let line = ''
    for (let j = 0; j < len; j++) {
      let cond = i === 0 || i === maxIndex || j === 0 || j === maxIndex
      line += cond ? '1' : '0'
    }
    console.log(line)
  }
}

const loop22 = (len) => {
  const center = 2
  // sẽ có case center là 0 hoặc số khác
  // tạm thời khoan tính
  if (len <= center) {
    console.log('1')
    return
  }

  const maxLen = (len - center) * 2 + 1
  const centerRow = len - center

  // console.log({ maxLen, centerRow })

  for (let i = 0; i < maxLen; i++) {
    let line = ''
    let num = len
    let rowMin = i <= centerRow ? len - i : i - len + 2 * center

    for (let j = 0; j < maxLen; j++) {
      if (j <= centerRow) {
        num = len - j
      } else {
        num = j - len + center * 2
      }
      line += Math.max(num, rowMin)
    }

    console.log(rowMin, '-', line)
  }
}

export const run = () => {
  loop17(5)
}

/*
SUMMARY
2 type: * or number
Loop với 1 dạng Map vd alphabet !!

chẵn lẻ 2d -> module i,j giống nhau
12 - 19 - 20
*/
