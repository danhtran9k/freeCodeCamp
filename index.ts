import { PriorityQueue } from '@datastructures-js/priority-queue'
// import { Deque } from '@datastructures-js/deque'

type TEdge = number[] // [from, to , weight] or [destTo, weight]
type TEdges = TEdge[]
type TQueue = { source: number; dist: number }

function findAnswer(n: number, edges: TEdges): boolean[] {
  const res = Array(n).fill(false)
  const adjs = edgesToAdj(edges, n)
  const dijkstra = genDijkstra(n, adjs)
  console.log({ dijkstra })
  // backtrack Dijkstra from Dest to Source
  // const btrDeque = new Deque<number>([n - 1])
  // btrDeque
  // while (btrDeque.size) {
  //   const curr = btrDeque
  // }
  return res
}

type TDijkstra = number[]

const genDijkstra = (n: number, adjs: TEdge[][]) => {
  const dijkstra: TDijkstra = Array(n).fill(Infinity)
  dijkstra[0] = 0

  const minQueue = new PriorityQueue<TQueue>(
    (a, b) => a.dist - b.dist,
    [{ source: 0, dist: 0 }]
  )

  while (minQueue.size()) {
    const { source, dist } = minQueue.pop()

    if (dist > dijkstra[source]) continue
    dijkstra[source] = dist

    for (const [dest, weight, _] of adjs[source]) {
      const prevDistToDist = dijkstra[dest]
      const newDist = dist + weight

      if (newDist >= prevDistToDist) continue
      dijkstra[dest] = newDist
      minQueue.enqueue({ source: dest, dist: newDist })
    }
  }

  return dijkstra
}

const edgesToAdj = (edges: TEdges, len: number) => {
  const adjs: TEdge[][] = Array.from({ length: len }, () => [])
  for (let ixEdge = 0; ixEdge < edges.length; ixEdge++) {
    const [from, to, weight] = edges[ixEdge]
    adjs[from].push([to, weight, ixEdge])
    adjs[to].push([from, weight, ixEdge])
  }
  return adjs
}

const edges = [
  [0, 1, 4],
  [0, 2, 1],
  [1, 3, 2],
  [1, 4, 3],
  [1, 5, 1],
  [2, 3, 1],
  [3, 5, 3],
  [4, 5, 2]
]
const n = 6
const rest = findAnswer(n, edges)
console.log(rest)
