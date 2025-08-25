





function minCost(grid: number[][]): number {
  const { row, col, visited_cost, DPOS, isIn } = setup(grid)
  if (row === 1 && col === 1) return 0

  let queueZero: { x: number, y: number }[] = []
  let queueOne: { x: number, y: number }[] = []
  queueZero.push({ x: 0, y: 0 })

  while (queueZero.length) {
    const { x, y } = queueZero.pop()
    const curr_state = grid[x][y]
    const curr_cost = visited_cost[x][y]

    for (let dirState = 1; dirState <= 4; dirState++) {
      const [dx, dy] = DPOS[dirState]
      const nx = x + dx
      const ny = y + dy
      if (!isIn(nx, ny)) continue

      const old_next_cost = visited_cost[nx][ny]
      const move_cost = curr_state === dirState ? 0 : 1
      const new_cost = curr_cost + move_cost
      if (new_cost >= old_next_cost) continue

      visited_cost[nx][ny] = new_cost // update before enqueue
      // if (nx === row - 1 && ny === col - 1) return new_cost
      // KO BREAK EARLY, phải exhausted queueZero

      if (move_cost === 1) {
        queueOne.push({ x: nx, y: ny })
      } else {
        queueZero.push({ x: nx, y: ny })
      }
    }

    if (!queueZero.length) {
      queueZero = queueOne
      queueOne = []
    }
  }

  // should be break early
  return -1
};

const setup = (grid: number[][]) => {
  const row = grid.length
  const col = grid[0].length


  const visited_cost = Array.from({ length: row },
    () => Array(col).fill(Infinity))
  visited_cost[0][0] = 0

  const DPOS = {
    1: [0, 1],
    2: [0, -1],
    3: [1, 0],
    4: [-1, 0]
  }

  const isIn = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;

  return { row, col, visited_cost, DPOS, isIn }
}


// const grid = [[1, 1, 1, 1], [2, 2, 2, 2], [1, 1, 1, 1], [2, 2, 2, 2]]
const grid = [[1, 1, 3], [3, 2, 2], [1, 1, 4]]
const rest = minCost(grid)
console.log(rest)
