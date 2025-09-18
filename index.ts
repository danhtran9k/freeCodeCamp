import { daily_lc } from './daily'
daily_lc()

// ================================================
// ================================================

import { MaxPriorityQueue } from './node_modules/@datastructures-js/priority-queue/index'

function findMaxPathScore(
    edges: number[][],
    online: boolean[],
    k: number
): number {
    const { target, adjs } = setup(edges, online, k)
    const maxCostQueue = new MaxPriorityQueue<number[]>((item) => item[1])
    maxCostQueue.enqueue([0, 0, Infinity])

    let res = -1
    while (!maxCostQueue.isEmpty()) {
        const [node, totalCost, minEdge] = maxCostQueue.dequeue()
        if (node === target) {
            res = Math.max(res, minEdge)
            continue
        }

        for (const [neighb, cost] of adjs[node]) {
            const neighbCost = totalCost + cost
            if (neighbCost > k || cost > res) continue

            maxCostQueue.enqueue([neighb, neighbCost, Math.min(minEdge, cost)])
        }
    }

    return res
}

const setup = (edges: number[][], online: boolean[], k: number) => {
    const len = online.length
    const target = len - 1

    const adjs = Array.from({ length: len }, () => [])
    for (const [from, to, cost] of edges) {
        if (!online[from] || !online[to]) continue
        adjs[from].push([to, cost])
    }
    return { len, adjs, target }
}

const debug = () => {}
