function minDays(grid: number[][]): number {
  const { row, col, directions, isIn } = setup(grid)
  let islandCount = 0
  let cellCount = 0

  let hasArticulation = false
  let id = 0
  const idx = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => -1)
  )
  const low = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => -1)
  )

  const dfs = (ix, iy, isRoot = false) => {
    if (hasArticulation) return

    idx[ix][iy] = id
    low[ix][iy] = id
    id++

    let child = 0
    for (const [dx, dy] of directions) {
      const nx = ix + dx
      const ny = iy + dy
      if (!isIn(nx, ny) || !grid[nx][ny]) continue

      if (idx[nx][ny] === -1) {
        child++
        dfs(nx, ny, false)

        if (!isRoot && low[nx][ny] >= idx[ix][iy]) hasArticulation = true

        low[ix][iy] = Math.min(low[ix][iy], low[nx][ny])
      } else {
        low[ix][iy] = Math.min(low[ix][iy], idx[nx][ny])
      }
    }

    if (isRoot && child > 1) hasArticulation = true
  }

  for (let ix = 0; ix < row; ix++) {
    for (let iy = 0; iy < col; iy++) {
      if (!grid[ix][iy]) continue

      cellCount++
      if (idx[ix][iy] !== -1) continue

      dfs(ix, iy, true)
      if (hasArticulation) return 1

      islandCount++
      if (islandCount > 1) return 0
    }
  }

  if (!islandCount) return 0
  if (cellCount === 1) return 1

  return 2
}

const setup = (grid: number[][]) => {
  const row = grid.length
  const col = grid[0].length
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const isIn = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < grid.length && y < grid[0].length
  return { row, col, directions, isIn }
}

const tc1 = [
  [1, 0, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 1]
]

const tc2 = [
  [1, 1, 0, 1, 0],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1]
]
