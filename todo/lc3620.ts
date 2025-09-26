export const lc_3260 = () => {
    // for (const { edges, online, k, expected } of tc_3260) {
    //     const resl = findMaxPathScore(edges, online, k)
    //     console.log({ resl, expected, nodes: online.length, k })
    // }

    const { edges, online, k, expected } = tc_3260[0]
    const resl = findMaxPathScore(edges, online, k)
    console.log({ resl, expected, nodes: online.length, k })
}

function findMaxPathScore(
    edges: number[][],
    online: boolean[],
    k: number
): number {
    const { check, maxWeight } = setup_3620(edges, online, k)

    let left = 0
    let right = maxWeight

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)
        const canReach = check(mid)
        if (canReach) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left - 1
}

// all edge has been filter < k in graph / adjs
const topoSSSP = (graph, topo, k) => (min) => {
    const len = graph.length

    // const minWeight = Array(len).fill(Infinity)
    const pathWeight = Array(len).fill(Infinity)
    pathWeight[0] = 0

    for (const node of topo) {
        const curr = pathWeight[node]
        if (curr === Infinity) continue

        for (const { to, cost } of graph[node]) {
            const currPath = pathWeight[node] + cost
            if (cost < min || currPath > k || currPath > pathWeight[to])
                continue

            // minWeight[to] = Math.min(minWeight[to], minWeight[node])
            pathWeight[to] = currPath
        }
    }

    return pathWeight[len - 1] !== Infinity
}
type TGraph = Record<number, { to: number; cost: number }[]>
const setup_3620 = (edges: number[][], online: boolean[], k?: number) => {
    const len = online.length

    let maxWeight = 0
    const graph: TGraph = Array.from({ length: len }, () => [])
    const inDegree = Array(len).fill(0)

    for (const [from, to, cost] of edges) {
        if (!online[from] || !online[to]) continue
        graph[from].push({ to, cost })
        inDegree[to]++
        maxWeight = Math.max(maxWeight, cost)
    }

    const topo = topoSort(inDegree, graph)
    const check = topoSSSP(graph, topo, k)
    console.log({ topo })
    return { maxWeight, check }
}

const topoSort = (inDegree: number[], graph: TGraph) => {
    let queue = []
    const topo = []

    for (let node = 0; node < inDegree.length; node++) {
        if (inDegree[node] === 0) queue.push(node)
    }

    while (queue.length) {
        const nextQueue = []

        for (const node of queue) {
            topo.push(node)

            for (const { to } of graph[node]) {
                inDegree[to]--
                if (!inDegree[to]) nextQueue.push(to)
            }
        }

        queue = nextQueue
    }

    return topo
}

const tc_3260 = [
    {
        edges: [
            [0, 1, 9],
            [0, 1, 5],
            [1, 3, 7],
            [0, 2, 22],
            [0, 2, 6],
            [2, 3, 50]
        ],
        online: [true, true, true, true],
        k: 1000,
        expected: 22
    },
    {
        edges: [
            [2, 3, 50],
            [3, 4, 65],
            [0, 1, 91],
            [1, 4, 47],
            [0, 3, 24],
            [1, 3, 53]
        ],
        online: [true, true, true, true, true],
        k: 254,
        expected: 53
    },
    { edges: [], online: [true, true], k: 73, expected: -1 },
    { edges: [], online: [true, true], k: 0, expected: -1 }
    // {
    //     edges: [
    //         [0, 1, 0],
    //         [0, 2, 7],
    //         [1, 3, 9],
    //         [0, 4, 7],
    //         [2, 4, 9],
    //         [3, 4, 2],
    //         [0, 3, 5],
    //         [2, 3, 3],
    //         [1, 4, 6],
    //         [1, 2, 0]
    //     ],
    //     online: [true, true, true, true, true],
    //     k: 5
    // },
    // {
    //     edges: [
    //         [0, 1, 5],
    //         [1, 3, 10],
    //         [0, 2, 3],
    //         [2, 3, 4]
    //     ],
    //     online: [true, true, true, true],
    //     k: 10
    // }
]
