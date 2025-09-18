function findMaxPathScore(
    edges: number[][],
    online: boolean[],
    k: number
): number {
    const { graph, end } = setup_3620(edges, online)

    let max = -1
    const dfs = (node, total, min) => {
        // if (total > k) return
        if (node === end) {
            max = Math.max(max, min)
            return
        }

        for (const { to, cost } of graph[node]) {
            if (!online[to] || total + cost > k) continue

            dfs(to, total + cost, Math.min(min, cost))
        }
    }

    dfs(0, 0, Infinity)
    return max
}

const setup_3620 = (edges: number[][], online: boolean[]) => {
    const len = online.length
    const end = len - 1

    const graph = Array.from({ length: len }, () => [])
    for (const [from, to, cost] of edges) graph[from].push({ to, cost })

    return { graph, end }
}

export const lc_3260 = () => {
    for (const { edges, online, k, expected } of tc_3260) {
        const resl = findMaxPathScore(edges, online, k)
        console.log({ resl, expected, nodes: online.length, k })
    }
}

const tc_3260 = [
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
