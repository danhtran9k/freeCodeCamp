function secondMinimum(
    n: number,
    edges: number[][],
    time: number,
    change: number
): number {
    let res = 0
    return res
}

export const lc_2045 = () => {
    // https://leetcode.com/problems/second-minimum-time-to-reach-destination/
    const { n, edges, time, change } = tc[0]
    console.log(secondMinimum(n, edges, time, change))
}

const tc = [
    {
        n: 5,
        edges: [
            [1, 2],
            [1, 3],
            [1, 4],
            [3, 4],
            [4, 5]
        ],
        time: 3,
        change: 5
    },
    {
        n: 2,
        edges: [[1, 2]],
        time: 3,
        change: 2
    }
]
