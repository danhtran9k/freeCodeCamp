import { PriorityQueue } from './node_modules/@datastructures-js/priority-queue/index'
type TEdge = number[] // [from, to , weight] , [destTo, weight]
type TEdges = TEdge[]
type TQueue = { dest: number; dist: number }
function findAnswer(n: number, edges: TEdges): boolean[] {
  const res = Array(n).fill(false)
  const minDist = Array(n).fill(Infinity)

  const adjs = edgesToAdj(edges, n)

  const minQueue = new PriorityQueue<TQueue>(
    (a, b) => a.dist - b.dist,
    [{ dest: 0, dist: 0 }]
  )

  while (minQueue.size()) {
    console.log('🚀 index L17-size: minQueue.size()', { size: minQueue.size() })
    const { dest, dist } = minQueue.pop()

    if (dist > minDist[dest]) continue
    minDist[dest] = dist

    // dest now is from -> adjs[from] = adjs[dist]
    for (const [distTo, weight] of adjs[dist]) {
      const prevDistToDist = minDist[distTo]
      const newDist = dist + weight

      if (newDist >= prevDistToDist) continue
      minDist[distTo] = newDist
      minQueue.enqueue({ dest: distTo, dist: newDist })
      console.log({ from: dest, to: distTo, size: minQueue.size() })
    }
  }

  console.log(minDist)
  return res
}

const edgesToAdj = (edges: TEdges, len: number) => {
  const adjs: TEdge[][] = Array.from({ length: len }, () => [])
  for (const [from, to, weight] of edges) {
    adjs[from].push([to, weight])
    adjs[to].push([from, weight])
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
