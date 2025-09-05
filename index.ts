import { main_scc_run } from './data-algo/graph-algo/tarjan_scc'

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

function minMalwareSpread2(graph: number[][], initial: number[]): number {
  const { dfs, countSub, visited } = tarjan_infect_setup(graph, initial)

  let maxSize = 0
  let minIndex = Infinity

  for (const node of initial) {
    if (visited[node] === -1) {
      dfs(node, node)
    }

    const size = countSub[node]
    if (size > maxSize || (size === maxSize && node < minIndex)) {
      maxSize = size
      minIndex = node
    }
  }

  return minIndex
}

const tarjan_infect_setup = (graph: number[][], initial: number[]) => {
  const len = graph.length

  let id = 0
  const ids = Array(len).fill(-1)
  const visited = Array(len).fill(-1)

  const initialSet = new Set(initial)
  const countSub = Array(len).fill(0)

  // const parentSize: Record<number, number> = {}
  // vì đi tiếp khi gặp source khác, ko skip nên phải là array
  // ngoài ra dùng array khỏi track parent color -> vốn fail bài này

  const dfs = (node, rootStart) => {
    ids[node] = id
    visited[node] = id
    id++

    let size = 1
    let flag = initialSet.has(node) && node !== rootStart
    // có flag nhưng vẫn duyệt đủ, ko skip như 1

    const neighbougrs = graph[node]
    for (let neighb = 0; neighb < len; neighb++) {
      if (!neighbougrs[neighb]) continue

      if (ids[neighb] === -1) {
        const childSize = dfs(neighb, -1)
        if (!childSize) flag = true
        size += childSize // + 0 ko đổi

        if (visited[neighb] >= ids[node]) {
          countSub[node] += childSize
          // add khi node là articulation point
        }

        visited[node] = Math.min(visited[node], visited[neighb])
      } else {
        visited[node] = Math.min(visited[node], ids[neighb])
      }
    }

    return flag ? 0 : size
  }

  return { dfs, visited, countSub }
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

const graph2 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]
const initial2 = [0, 1]

// main_scc_run()
const result2 = minMalwareSpread2(graph2, initial2)
console.log(result2)
