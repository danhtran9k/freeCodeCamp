/*
https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/
3459. Length of Longest V-Shaped Diagonal Segment

You are given a 2D integer matrix grid of size n x m, where each element is either 0, 1, or 2.

A V-shaped diagonal segment is defined as:

The segment starts with 1.
The subsequent elements follow this infinite sequence: 2, 0, 2, 0, ....
The segment:
Starts along a diagonal direction (top-left to bottom-right, bottom-right to top-left, top-right to bottom-left, or bottom-left to top-right).
Continues the sequence in the same diagonal direction.
Makes at most one clockwise 90-degree turn to another diagonal direction while maintaining the sequence.

n == grid.length
m == grid[i].length
1 <= n, m <= 500
grid[i][j] is either 0, 1 or 2.
*/

const tc_3459 = [
  {
    grid: [
      [2, 2, 1, 2, 2],
      [2, 0, 2, 2, 0],
      [2, 0, 1, 1, 0],
      [1, 0, 2, 2, 2],
      [2, 0, 0, 2, 2]
    ],
    expected: 5
  },
  {
    grid: [
      [2, 2, 2, 2, 2],
      [2, 0, 2, 2, 0],
      [2, 0, 1, 1, 0],
      [1, 0, 2, 2, 2],
      [2, 0, 0, 2, 2]
    ],
    expected: 4
  },
  {
    grid: [
      [1, 2, 2, 2, 2],
      [2, 2, 2, 2, 0],
      [2, 0, 0, 0, 0],
      [0, 0, 2, 2, 2],
      [2, 0, 0, 2, 0]
    ],
    expected: 5
  },
  {
    grid: [[1]],
    expected: 1
  },
  {
    grid: [[2]],
    expected: 2
  },
  {
    grid: [[0]],
    expected: 0
  },
  {
    grid: [[0, 0, 2]],
    expected: 0
  },
  {
    grid: [
      [0, 0, 0, 2, 2],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    expected: 3
  },
  {
    grid: [
      [0, 0, 2],
      [2, 0, 0]
    ],
    expected: 0
  },
  {
    grid: [
      [0, 0, 2, 2],
      [0, 0, 1, 0]
    ],
    expected: 1
  }
]

const DIRS_3459 = {
  '↖️': [-1, -1],
  '↗️': [-1, 1],
  '↘️': [1, 1],
  '↙️': [1, -1]
}

function lenOfVDiagonal_3459(grid: number[][]): number {
  let step = 0
  setup_3459(grid)
  return step
}

const NULLER = 1
const setup_3459 = (grid: number[][]) => {
  const lastRow = grid.length - 1
  const lastCol = grid[0].length - 1

  const lastDiag = lastRow + lastCol

  const isIn = (x, y) => x >= 0 && y >= 0 && x <= lastRow && y <= lastCol

  const memoTurn = Array.from({ length: lastRow + 1 }, () =>
    Array.from({ length: lastCol + 1 }, () => ({
      '↖️': 0,
      '↗️': 0,
      '↘️': 0,
      '↙️': 0
    }))
  )

  const getByDir = (ix, iy, dir) => {
    const [dx, dy] = DIRS[dir]

    const posX = ix + dx
    const posY = iy + dy

    const val = isIn(posX, posY) ? grid[posX][posY] : NULLER
    return { posX, posY, val }
  }

  //  memoTurn ↖️ ↗️
  for (let ix = 0; ix <= lastRow; ix++) {
    for (let iy = 0; iy <= lastCol; iy++) {
      const curr = grid[ix][iy]

      if (curr === 1) continue

      const left = getByDir(ix, iy, '↖️')
      const right = getByDir(ix, iy, '↗️')

      if (curr + left.val === 2) {
        memoTurn[ix][iy]['↖️'] = memoTurn[left.posX][left.posY]['↖️'] + 1
      }

      if (curr + right.val === 2) {
        memoTurn[ix][iy]['↗️'] = memoTurn[right.posX][right.posY]['↗️'] + 1
      }
    }
  }

  // memoTurn ↘️ ↙️
  for (let ix = lastRow; ix >= 0; ix--) {
    for (let iy = 0; iy <= lastCol; iy++) {
      const curr = grid[ix][iy]
      if (curr === 1) continue

      const left = getByDir(ix, iy, '↙️')
      const right = getByDir(ix, iy, '↘️')

      if (curr + left.val === 2) {
        memoTurn[ix][iy]['↙️'] = memoTurn[left.posX][left.posY]['↙️'] + 1
      }

      if (curr + right.val === 2) {
        memoTurn[ix][iy]['↘️'] = memoTurn[right.posX][right.posY]['↘️'] + 1
      }
    }
  }

  return { lastCol, lastRow, lastDiag, isIn, memoTurn }
}

const resl = lenOfVDiagonal_3459(tc_3459[1].grid)
console.log(resl)

const testDiag1x = [
  [11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28]
]

const testDiag2x = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [20, 21, 22],
  [23, 24, 25]
]

// ↖️↘️ : lastRow -> -lastCol [lastRow,0] -> [0,lastCol] , [+1, +1]
// ↗️↙️ : 0 -> lastDiag [0,0] -> [lastRow,lastCol] , [-1, +1]
const moveDiag_3459 = (grid) => {
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

moveDiag_3459(testDiag1x)
moveDiag_3459(testDiag2x)
