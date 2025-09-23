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

    const solve = (limitCost) => {
        const maxCostQueue = new MaxPriorityQueue<number[]>((item) => item[1])
        maxCostQueue.enqueue([0, 0])

        let res = -1
        while (!maxCostQueue.isEmpty()) {
            const [node, totalCost] = maxCostQueue.dequeue()
            if (node === target) return totalCost

            for (const [neighb, cost] of adjs[node]) {
                const neighbCost = totalCost + cost
                if (neighbCost > k || cost > limitCost) continue

                maxCostQueue.enqueue([neighb, neighbCost])
            }
        }
        return res
    }

    return 0
}

const setup = (edges: number[][], online: boolean[], k: number) => {
    const len = online.length
    const target = len - 1
    let max_cost = 0

    const adjs: Record<number, number>[] = Array.from(
        { length: len },
        () => ({} as Record<number, number>)
    )
    for (const [from, to, cost] of edges) {
        if (!online[from] || !online[to] || cost > k) continue
        // adjs[from][to] = Math.max
    }

    const bisect = (arr, target, isExclude = true) => {
        let left = -1
        let right = max_cost

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2)

            // default là UPPER_BOUND_EXCLUDE
            const cond = isExclude ? target < arr[mid] : target <= arr[mid]

            if (cond) {
                // target < arr[mid]  (or <=)
                right = mid
            } else {
                // target >= arr[mid] (or >)
                left = mid + 1
            }
        }

        return left
    }

    return { len, adjs, target, max_cost }
}
