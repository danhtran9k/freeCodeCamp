import { main_articulation_run } from './data-algo/graph-algo/tarjan_articulation'

function minMalwareSpread(graph: number[][], initial: number[]): number {
  const len = graph.length
  const parents = Array(len).fill(-1)
  const parentSize: Record<number, number> = {}
  const initialSet = new Set(initial)
  let cnt = 0

  const dfs = (node: number, mark: number, initSkip = -1) => {
    cnt++
    parents[node] = mark
    if (initialSet.has(node) && node !== initSkip) return 0

    let size = 1
    let flag = false

    const neighbougrs = graph[node]
    for (let neighb = 0; neighb < len; neighb++) {
      if (!neighbougrs[neighb] || parents[neighb] !== -1) continue

      const childSize = dfs(neighb, mark, -1)
      if (!childSize) flag = true

      size += childSize
    }

    return flag ? 0 : size
  }

  let maxSize = 0
  let minIndex = len

  for (const node of initial) {
    if (parents[node] === -1) {
      const size = dfs(node, node, node)
      parentSize[node] = size
      parents[node] = node
    }

    const parent = parents[node]
    const size = parentSize[parent]
    if (size > maxSize || (size === maxSize && node < minIndex)) {
      maxSize = size
      minIndex = node
    }
  }
  console.log({ cnt })
  return minIndex
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
console.log(minMalwareSpread(graph, initial))

main_articulation_run()
