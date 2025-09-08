import { tc_edge } from './data-algo/testcase/gen-tc-tarjan'
import { GraphConverter } from './data-algo/testcase/graph-converter'

function findShortestCycle(n: number, edges: number[][]): number {
    let minDepth = Infinity
    const visited = Array(n).fill(false)

    const bfs = (node, parent) => {
        let depth = 1
        let queue = [node]
        visited[node] = true

        while (queue.length) {
            const nextQueue = []
            const node = queue.shift()
            const neighbors = edges[node]

            for (const neighb of neighbors) {
                if (neighb === parent) continue

                if (visited[neighb]) return depth
                visited[neighb] = true
                nextQueue.push(neighb)
            }

            depth++
            queue = nextQueue
        }

        // depth exit inside loop
        return -1
    }

    for (let node = 0; node < n; node++) {
        if (!visited[node]) bfs(node, -1)
    }

    return minDepth === Infinity ? -1 : minDepth
}

const lc_run = () => {
    // const { edges, V } = tc_edge.tc_cycle_size_1
    const V = 6
    const edges = [
        [4, 1],
        [5, 1],
        [3, 2],
        [5, 0],
        [5, 2],
        [4, 0],
        [3, 0],
        [2, 1]
    ]
    const test = findShortestCycle(V, edges)
    console.log(test)
}

lc_run()
