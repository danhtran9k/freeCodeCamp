const testDiag1 = [
  [11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28]
]

const testDiag2 = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [20, 21, 22],
  [23, 24, 25]
]

// ↖️↘️ : lastRow -> -lastCol
// ↗️↙️ : 0 -> lastDiag
const traverseDiag = (grid) => {
  const lastRow = grid.length - 1
  const lastCol = grid[0].length - 1

  const lastDiag = lastRow + lastCol //↗️↙️ : 0 -> lastDiag

  const isIn = (x, y) => x >= 0 && y >= 0 && x <= lastRow && y <= lastCol
  let ixStart = lastRow
  let iyStart = 0
  const rest = []

  for (let ixDiag = 0; ixDiag <= lastDiag; ixDiag++) {
    let ix = ixStart
    let iy = iyStart
    const tmp = []

    // do ix tới biên phải sẽ có DK khác
    while (isIn(ix, iy)) {
      tmp.push(grid[ix][iy])
      ix += 1
      iy += 1
    }

    rest.push(tmp)
    if (ixStart - 1 >= 0) {
      ixStart -= 1
    } else {
      iyStart += 1
    }
  }

  console.log(rest)

  return rest
}

moveDiag(testDiag1)
moveDiag(testDiag2)

const traverseDiag_2 = (grid) => {
  const lastRow = grid.length - 1
  const lastCol = grid[0].length - 1

  const lastDiag = lastRow + lastCol //↗️↙️ : 0 -> lastDiag

  const isIn = (x, y) => x >= 0 && y >= 0 && x <= lastRow && y <= lastCol
  let ixStart = 0
  let iyStart = 0
  const rest = []

  for (let cnt = 0; cnt <= lastDiag; cnt++) {
    let ix = ixStart
    let iy = iyStart
    const tmp = []

    while (true) {
      tmp.push(grid[ix][iy])
      ix += 1
      iy -= 1
      if (!isIn(ix, iy)) break
    }

    rest.push(tmp)
    if (iyStart < lastCol) {
      iyStart += 1
    } else {
      ixStart += 1
    }
  }

  console.log(rest)

  return rest
}
