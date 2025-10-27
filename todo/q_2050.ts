function minimumTime(n: number, relations: number[][], time: number[]): number {
    let res = 0
    return res
}

export const q_2050 = () => {
    // https://leetcode.com/problems/parallel-courses-iii/
    const { n, relations, time } = tc[0]
    console.log(minimumTime(n, relations, time))
}

const tc = [
    {
        n: 3,
        relations: [
            [1, 3],
            [2, 3]
        ],
        time: [3, 2, 5]
    }
]
