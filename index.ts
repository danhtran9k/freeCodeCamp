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

const tc = [
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

const DIRS = {
  '↖️': [-1, -1],
  '↗️': [-1, 1],
  '↘️': [1, 1],
  '↙️': [1, -1]
}

function lenOfVDiagonal(grid: number[][]): number {
  let res = 0
  const { lastRow, lastCol, lastDiag, isIn, memoTurn } = setup(grid)

  const walker = (dir: '↙️' | '↘️') => {
    const [dx, dy] = DIRS[dir]

    return (ixBegin: number, iyBegin: number) => {
      let ix = ixBegin
      let iy = iyBegin

      let seen_one = false
      let step = 0
      let curr_forward = 0
      let curr_backward = 0

      // curr luôn valid (head diag luôn valid !)
      // check invalid với next, invalid thì reset

      while (true) {
        const curr = grid[ix][iy]

        curr_backward++
        if (seen_one) {
          curr_forward++

          // memoTurn forward ↙️ is ↖️ , backward ↗️ is ↘️
          // memoTurn forward ↘️ is ↙️ , backward ↖️ is ↗️

          res = Math.max(
            res,
            curr_forward + memoTurn[ix][iy][dir === '↙️' ? '↖️' : '↙️']
            // try curr turn
          )
        }

        if (curr === 1) {
          seen_one = true
        }

        ix += dx
        iy += dy
        if (!isIn(ix, iy)) {
          // if
          break
        } else {
          const next = grid[ix][iy]
        }
      }
    }
  }

  const walk_topLeft_botRight = walker('↙️')
  let ixStart = 0
  let iyStart = 0

  for (let cnt = 0; cnt <= lastDiag; cnt++) {
    walk_topLeft_botRight(ixStart, iyStart)
    if (iyStart < lastCol) {
      iyStart++
    } else {
      ixStart++
    }
  }

  const walk_botLeft_topRight = walker('↘️')
  ixStart = lastRow
  iyStart = 0

  for (let cnt = 0; cnt <= lastDiag; cnt++) {
    walk_botLeft_topRight(ixStart, iyStart)
    if (ixStart > 0) {
      ixStart--
    } else {
      iyStart++
    }
  }

  return res
}

const NULLER = -3
const setup = (grid: number[][]) => {
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

  const getByDir = (dir) => {
    const [dx, dy] = DIRS[dir]

    return (ix, iy) => {
      const posX = ix + dx
      const posY = iy + dy

      const val = isIn(posX, posY) ? grid[posX][posY] : NULLER
      return { posX, posY, val }
    }
  }

  const memoSetter = (isMoveUp: boolean) => {
    const [L, R] = isMoveUp ? ['↖️', '↗️'] : ['↙️', '↘️']
    const getLeft = getByDir(L)
    const getRight = getByDir(R)

    return (ix, iy) => {
      const curr = grid[ix][iy]
      const left = getLeft(ix, iy)
      const right = getRight(ix, iy)

      if (curr + left.val === 2 || (curr === 1 && left.val === 2)) {
        memoTurn[ix][iy][L] = memoTurn[left.posX][left.posY][L] + 1
      }

      if (curr + right.val === 2 || (curr === 1 && right.val === 2)) {
        memoTurn[ix][iy][R] = memoTurn[right.posX][right.posY][R] + 1
      }
    }
  }

  //  memoTurn ↖️ ↗️
  const setterUp = memoSetter(true)
  for (let ix = 0; ix <= lastRow; ix++) {
    for (let iy = 0; iy <= lastCol; iy++) {
      setterUp(ix, iy)
    }
  }

  // memoTurn ↘️ ↙️
  const setterDown = memoSetter(false)
  for (let ix = lastRow; ix >= 0; ix--) {
    for (let iy = 0; iy <= lastCol; iy++) {
      setterDown(ix, iy)
    }
  }

  return { lastCol, lastRow, lastDiag, isIn, memoTurn }
}

const resl = lenOfVDiagonal(tc[1].grid)
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
const move_topRight_botLeft = (grid) => {
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

move_topRight_botLeft(testDiag1x)
move_topRight_botLeft(testDiag2x)
