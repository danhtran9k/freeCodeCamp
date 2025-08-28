// https://leetcode.com/problems/critical-connections-in-a-network/
// 1192. Critical Connections in a Network

function criticalConnections(n: number, connections: number[][]): number[][] {
  const adjs = edgesToAdj_1192(connections, n)
  const visited = Array(n).fill(-1)
  const res = []

  const dfs = (node: number, parent: number, depth: number): number => {
    if (visited[node] !== -1) return visited[node]

    visited[node] = depth
    let minDepthNeighb = depth

    for (const neighb of adjs[node]) {
      if (neighb === parent) continue

      const backDepth = dfs(neighb, node, depth + 1)
      minDepthNeighb = Math.min(minDepthNeighb, backDepth)
    }

    if (minDepthNeighb < depth) {
      visited[node] = minDepthNeighb
    }
    console.log({ node, parent, minDepthNeighb })
    return minDepthNeighb
  }

  dfs(0, -1, 0)
  console.log({ visited })
  for (const [from, to] of connections) {
    if (visited[from] === visited[to]) continue
    res.push([from, to])
  }
  return res
}

const edgesToAdj_1192 = (edges: number[][], len: number) => {
  const adjs: number[][] = Array.from({ length: len }, () => [])
  for (const [from, to] of edges) {
    adjs[from].push(to)
    adjs[to].push(from)
  }
  return adjs
}

// garanteed 2 cons the same , just swap pos and from to
// result khác biệt rõ ràng, visited depth khác, res cũng khác luôn
// const cons = [[0, 1],[0, 2],[1, 2],[1, 3],[1, 5],[1, 7],[2, 6],[2, 8],[3, 4],[3, 9],[4, 5],[6, 7]]
const conns_1192 = [
  [6, 7],
  [1, 2],
  [3, 4],
  [9, 3],
  [0, 1],
  [7, 1],
  [2, 6],
  [8, 2],
  [5, 4],
  [1, 3],
  [5, 1],
  [2, 0]
]
const n = 10
// expect [[2,8], [3,9]]
// array depth trả ra SAI, KQ sai khủng khiếp
const res_criticalConnections = criticalConnections(n, conns_1192)
console.log(res_criticalConnections)
