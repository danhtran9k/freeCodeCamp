import { MinPriorityQueue } from '../../node_modules/@datastructures-js/priority-queue/index'

type TAdjs = Record<number, TEdge[]>
type TEdge = { dest: number; weight: number; ixEdge: number }

type TQueue = { source: number; dist: number }
type TDijkstra = number[]

export const genDijkstra = (n: number, adjs: TAdjs) => {
    const FINAL = n - 1
    const dijkstra: TDijkstra = Array(n).fill(Infinity)
    dijkstra[0] = 0

    const minQueue = new MinPriorityQueue<TQueue>(
        (a, b) => a.dist - b.dist,
        [{ source: 0, dist: 0 }]
    )

    while (minQueue.size()) {
        const { source, dist } = minQueue.pop()

        if (dist > dijkstra[source]) continue
        if (source === FINAL) break

        for (const { dest, weight } of adjs[source] ?? []) {
            const prevDistToDist = dijkstra[dest]
            const newDist = dist + weight

            if (newDist >= prevDistToDist) continue
            dijkstra[dest] = newDist

            minQueue.enqueue({ source: dest, dist: newDist })
        }
    }

    return dijkstra
}
