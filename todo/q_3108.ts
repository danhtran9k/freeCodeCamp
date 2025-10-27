function minimumCost(
    n: number,
    edges: number[][],
    query: number[][]
): number[] {
    const res = []
    return res
}

export const lc_3108 = () => {
    // https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/
    const { n, edges, query } = tc[0]
    console.log(minimumCost(n, edges, query))
}

const tc = [
    {
        n: 5,
        edges: [
            [0, 1, 7],
            [1, 3, 7],
            [1, 2, 1]
        ],
        query: [
            [0, 3],
            [3, 4]
        ]
    }
]
