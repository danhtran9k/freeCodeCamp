function minOperationsQueries(
    n: number,
    edges: number[][],
    queries: number[][]
): number[] {
    const res = []
    return res
}

export const lc_2846 = () => {
    // https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/
    const { n, edges, queries } = tc[0]
    console.log(minOperationsQueries(n, edges, queries))
}

const tc = [
    {
        n: 7,
        edges: [
            [0, 1, 1],
            [1, 2, 1],
            [2, 3, 1],
            [3, 4, 2],
            [4, 5, 2],
            [5, 6, 2]
        ],
        queries: [
            [0, 3],
            [3, 6],
            [2, 6],
            [0, 6]
        ]
    },
    {
        n: 8,
        edges: [
            [1, 2, 6],
            [1, 3, 4],
            [2, 4, 6],
            [2, 5, 3],
            [3, 6, 6],
            [3, 0, 8],
            [7, 0, 2]
        ],
        queries: [
            [4, 6],
            [0, 4],
            [6, 5],
            [7, 4]
        ]
    }
]
