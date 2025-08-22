type TParent = { child: number[]; size: number }
type TSizes = Record<number, TParent>
type TInitSizes = Record<number, { size: number; dupInit: number }>

function minMalwareSpread(graph: number[][], initial: number[]): number {
  const len = graph.length
  const parents = Array(len).fill(-1)
  // const sizes: { node: number; size: number, sameInit: number }[] = []
  const initSizes: TInitSizes = {}
  initial.sort((a, b) => a - b)

  const dfs = (node: number, mark: number) => {
    // if (parents[node] !== -1) return
    parents[node] = mark
    let size = 1

    const neighbougrs = graph[node]
    for (let neighb = 0; neighb < len; neighb++) {
      if (!neighbougrs[neighb] || parents[neighb] !== -1) continue
      size += dfs(neighb, mark)
    }

    return size
  }

  for (const start of initial) {
    const parent = parents[start]
    if (parent !== -1) {
      initSizes[parent].dupInit++
      continue
    }
    const size = dfs(start, start)
    initSizes[start] = {
      size,
      dupInit: 1
    }
  }

  let minNodeDup = Infinity
  let maxSize = -Infinity
  let node = -1
  for (const [parent, { size, dupInit }] of Object.entries(initSizes)) {
    const numParent = +parent

    if (dupInit > 1 && numParent < minNodeDup) minNodeDup = numParent

    if (dupInit === 1 && size > maxSize) {
      maxSize = size
      node = numParent
    }
  }

  return node !== -1 ? node : minNodeDup
}

const graph = [
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
]

const initial = [7, 8, 6, 2, 3]

// const graph = [
//   [1, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 1],
//   [0, 0, 1, 1]
// ]
// const initial = [3, 1]

const rest = minMalwareSpread(graph, initial)
console.log(rest)
